#Flask driver code 
from flask import Flask, request, jsonify
import cv2
import numpy as np
from keras.preprocessing import image
import tensorflow as tf
from PIL import Image
import os
import re
import json
from deep_translator import GoogleTranslator
from indic_transliteration import sanscript
from indic_transliteration.sanscript import transliterate

app = Flask(__name__)

# Ensure temporary directories exist
UPLOAD_FOLDER = 'uploads'
SEGMENT_FOLDER = 'temp_segments'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(SEGMENT_FOLDER, exist_ok=True)

# Function for skew correction
def correct_skew(image, delta=1, limit=5):
    def determine_score(arr, angle):
        (h, w) = arr.shape
        center = (w // 2, h // 2)
        M = cv2.getRotationMatrix2D(center, angle, 1.0)
        rotated = cv2.warpAffine(arr, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
        histogram = np.sum(rotated, axis=1)
        score = np.sum((histogram[1:] - histogram[:-1]) ** 2)
        return rotated, score

    if len(image.shape) == 2:  # Grayscale check
        gray = image
    else:
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

    scores = []
    angles = np.arange(-limit, limit + delta, delta)
    best_rotated = None

    for angle in angles:
        rotated, score = determine_score(thresh, angle)
        scores.append(score)
        if score == max(scores):
            best_rotated = rotated

    best_angle = angles[scores.index(max(scores))]
    return best_angle, best_rotated

# Function for preprocessing
def preprocess_image(image):
    _, corrected_image = correct_skew(image)

    if len(image.shape) == 2:  # Already grayscale
        gray = image
    else:
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    filter1 = cv2.medianBlur(gray, 5)
    filter2 = cv2.GaussianBlur(filter1, (5, 5), 0)
    denoised_image = cv2.fastNlMeansDenoising(filter2, None, 17, 9, 17)

    _, binary_image = cv2.threshold(denoised_image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    return binary_image

# Function for character segmentation
def segment_characters(image):
    if len(image.shape) == 2:  # Grayscale check
        image = cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    kernel = np.ones((3, 3), np.uint8)
    dilated = cv2.dilate(thresh, kernel, iterations=1)

    contours, _ = cv2.findContours(dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    return contours

# Function for character recognition
def recognize_characters(image_folder):
    model = tf.keras.models.load_model("my_model.h5")

    with open('class_indices.json', 'r') as f:
        class_indices = json.load(f)

    predicted_labels = []
    for img_name in os.listdir(image_folder):
        if img_name.startswith('.'):
            continue
        img_path = os.path.join(image_folder, img_name)

        img = image.load_img(img_path, target_size=(200, 200))
        X = image.img_to_array(img)
        X = np.expand_dims(X, axis=0)

        prediction = model.predict(X)
        predicted_class_index = np.argmax(prediction)
        predicted_class_name = [k for k, v in class_indices.items() if v == predicted_class_index][0]
        predicted_labels.append(predicted_class_name)

    reconstructed_text = ''.join(predicted_labels)
    reconstructed_text = re.sub(r'\d+', '', reconstructed_text)

    return reconstructed_text

# Function to translate text to English
def translate_to_english(text):
    try:
        translated_text = GoogleTranslator(source='auto', target='en').translate(text)
        return translated_text
    except Exception as e:
        return f"Translation Error: {str(e)}"

@app.route('/process', methods=['POST'])
def process_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    # Read and preprocess the image
    image = cv2.imread(file_path)
    preprocessed_image = preprocess_image(image)

    # Segment characters
    contours = segment_characters(preprocessed_image)
    for i, contour in enumerate(contours):
        x, y, w, h = cv2.boundingRect(contour)
        if h < 20 and w < 20:  # Ignore small artifacts
            continue
        cropped_image = preprocessed_image[y:y+h, x:x+w]
        cv2.imwrite(os.path.join(SEGMENT_FOLDER, f"{i}.png"), cropped_image)

    # Recognize characters
    recognized_text = recognize_characters(SEGMENT_FOLDER)

    # Transliterate and translate
    transliterated_text = transliterate(recognized_text, sanscript.TAMIL, sanscript.ITRANS)
    translated_text = translate_to_english(transliterated_text)

    # Cleanup
    os.remove(file_path)
    for f in os.listdir(SEGMENT_FOLDER):
        os.remove(os.path.join(SEGMENT_FOLDER, f))

    return jsonify({
        'recognized_text': recognized_text,
        'transliterated_text': transliterated_text,
        'translated_text': translated_text
    })

if __name__ == '__main__':
    app.run(debug=True)
