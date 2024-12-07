import streamlit as st
import cv2
import numpy as np
from keras.preprocessing import image # type: ignore
import re
import tensorflow as tf
from PIL import Image
import os
import json
from googletrans import Translator

# Define function for skew correction
# def correct_skew(image, delta=1, limit=5):


#     def determine_score(arr, angle):
#         data = cv2.rotate(arr, angle)
#         histogram = np.sum(data, axis=1)
#         score = np.sum((histogram[1:] - histogram[:-1]) ** 2)
#         return histogram, score

#     gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
#     thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

#     scores = []
#     angles = np.arange(-limit, limit + delta, delta)
#     for angle in angles:
#         histogram, score = determine_score(thresh, angle)
#         scores.append(score)

#     best_angle = angles[scores.index(max(scores))]

#     (h, w) = image.shape[:2]
#     center = (w // 2, h // 2)
#     M = cv2.getRotationMatrix2D(center, best_angle, 1.0)
#     rotated = cv2.warpAffine(image, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)

#     return best_angle, rotated

def correct_skew(image, delta=1, limit=5):
    def determine_score(arr, angle):
        (h, w) = arr.shape
        center = (w // 2, h // 2)
        M = cv2.getRotationMatrix2D(center, angle, 1.0)
        rotated = cv2.warpAffine(arr, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
        histogram = np.sum(rotated, axis=1)
        score = np.sum((histogram[1:] - histogram[:-1]) ** 2)
        return rotated, score

    if len(image.shape) == 2:  # Check if the image is already grayscale
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

# Define function for preprocessing
def preprocess_image(image):
    angle, corrected_image = correct_skew(image)

    if len(image.shape) == 2:  # Already grayscale
        gray = image
    else:
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    filter1 = cv2.medianBlur(gray, 5)
    filter2 = cv2.GaussianBlur(filter1, (5, 5), 0)
    denoised_image = cv2.fastNlMeansDenoising(filter2, None, 17, 9, 17)

    _, binary_image = cv2.threshold(denoised_image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    return binary_image

# Define function for character segmentation
def segment_characters(image):
    if len(image.shape) == 2:  # Check if the image is grayscale
        image = cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    kernel = np.ones((3, 3), np.uint8)
    dilated = cv2.dilate(thresh, kernel, iterations=1)

    contours, _ = cv2.findContours(dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    letter_image = image.copy()
    for contour in contours:
        x, y, w, h = cv2.boundingRect(contour)
        cv2.rectangle(letter_image, (x, y), (x + w, y + h), (0, 255, 0), 2)

    return letter_image, contours

# Define function for character recognition
def recognize_characters(image_folder):
    model = tf.keras.models.load_model("my_model.h5")

    # Load class indices from JSON file
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
    translator = Translator()
    try:
        translated = translator.translate(text, src='auto', dest='en')  # Detect source language and translate to English
        return translated.text
    except Exception as e:
        return f"Translation Error: {str(e)}"

def main():
    st.title("Ancient Inscription Translation")

    # File uploader for input image
    st.sidebar.title("Upload Image")
    uploaded_image = st.sidebar.file_uploader("Upload your ancient inscription image", type=["jpg", "png"])

    if uploaded_image is not None:
        # Display the input image
        st.sidebar.image(uploaded_image, caption="Uploaded Image", use_column_width=True)

        # Button to start processing
        if st.sidebar.button("Process", key="process_button_1"):
            # Convert the uploaded image to a format suitable for OpenCV
            image = Image.open(uploaded_image)
            image = np.array(image)

            # Display the input image in the main area
            st.subheader("Uploaded Image")
            st.image(image, caption="Uploaded Image", use_column_width=True)

            # Preprocessing
            st.subheader("1. Preprocessing")
            preprocessed_image = preprocess_image(image)
            st.image(preprocessed_image, caption="Preprocessed Image", use_column_width=True, channels="GRAY")

            # Character segmentation
            st.subheader("2. Character Segmentation")
            segmented_characters, contours = segment_characters(preprocessed_image)
            st.image(segmented_characters, caption="Segmented Characters", use_column_width=True)

            # Save segmented characters to a temporary directory for recognition
            temp_dir = "temp_segments"
            if not os.path.exists(temp_dir):
                os.makedirs(temp_dir)

            for i, contour in enumerate(contours):
                x, y, w, h = cv2.boundingRect(contour)
                # Check if either height or width is less than 20 pixels
                if h < 20 and w < 20:
                    continue
                cropped_image = preprocessed_image[y:y+h, x:x+w]
                cv2.imwrite(os.path.join(temp_dir, f"{i}.png"), cropped_image)

            # Character recognition
            st.subheader("3. Character Recognition")
            recognized_text = recognize_characters(temp_dir)
            st.text("Recognized Text: "+recognized_text)

            st.subheader("4. Translation to English")
            translated_text = translate_to_english(recognized_text)
            st.text("Translated Text: " + translated_text)

# Run the Streamlit application
if __name__ == "__main__":
    main()

# import streamlit as st
# import cv2
# import numpy as np
# from keras.preprocessing import image  # type: ignore
# import re
# import tensorflow as tf
# from PIL import Image
# import os
# import json

# # Define function for skew correction
# def correct_skew(image, delta=1, limit=5):
#     def determine_score(arr, angle):
#         data = cv2.rotate(arr, angle)
#         histogram = np.sum(data, axis=1)
#         score = np.sum((histogram[1:] - histogram[:-1]) ** 2)
#         return histogram, score

#     gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
#     thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

#     scores = []
#     angles = np.arange(-limit, limit + delta, delta)
#     for angle in angles:
#         histogram, score = determine_score(thresh, angle)
#         scores.append(score)

#     best_angle = angles[scores.index(max(scores))]

#     (h, w) = image.shape[:2]
#     center = (w // 2, h // 2)
#     M = cv2.getRotationMatrix2D(center, best_angle, 1.0)
#     rotated = cv2.warpAffine(image, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)

#     return best_angle, rotated

# # Define function for preprocessing
# def preprocess_image(image):
#     angle, corrected_image = correct_skew(image)

#     gray = cv2.cvtColor(corrected_image, cv2.COLOR_BGR2GRAY)
#     filter1 = cv2.medianBlur(gray, 5)
#     filter2 = cv2.GaussianBlur(filter1, (5, 5), 0)
#     denoised_image = cv2.fastNlMeansDenoising(filter2, None, 17, 9, 17)

#     _, binary_image = cv2.threshold(denoised_image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

#     return binary_image

# # Define function for extracting character images
# def extract_images(input_image, output_folder):
#     gray = cv2.cvtColor(input_image, cv2.COLOR_BGR2GRAY)
#     _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
#     kernel = np.ones((3, 3), np.uint8)
#     dilated = cv2.dilate(thresh, kernel, iterations=1)
#     contours, _ = cv2.findContours(dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

#     # Create output folder if it doesn't exist
#     os.makedirs(output_folder, exist_ok=True)
#     # Sort contours based on x-coordinate
#     contours = sorted(contours, key=lambda x: cv2.boundingRect(x)[0])

#     # Iterate through each contour and extract images inside the boundary boxes
#     for i, contour in enumerate(contours):
#         x, y, w, h = cv2.boundingRect(contour)
        
#         # Check if either height or width is less than 20 pixels
#         if h < 20 or w < 20:
#             continue
        
#         cropped_image = input_image[y:y+h, x:x+w]
        
#         # Save the cropped image with a unique name
#         output_path = os.path.join(output_folder, f"{i}.png")
#         cv2.imwrite(output_path, cropped_image)

#     return output_folder

# # Define function for character recognition
# def recognize_characters(image_folder):
#     model = tf.keras.models.load_model("my_model.h5")

#     # Load class indices from JSON file
#     with open('class_indices.json', 'r') as f:
#         class_indices = json.load(f)
    
#     predicted_labels = []

#     for img_name in os.listdir(image_folder):
#         if img_name.startswith('.'):
#             continue
#         img_path = os.path.join(image_folder, img_name)

#         img = image.load_img(img_path, target_size=(200, 200))
#         X = image.img_to_array(img)
#         X = np.expand_dims(X, axis=0)

#         prediction = model.predict(X)
#         predicted_class_index = np.argmax(prediction)
#         predicted_class_name = [k for k, v in class_indices.items() if v == predicted_class_index][0]
#         predicted_labels.append(predicted_class_name)

#     reconstructed_text = ''.join(predicted_labels)
#     reconstructed_text = re.sub(r'\d+', '', reconstructed_text)

#     return reconstructed_text

# def main():
#     st.title("Ancient Inscription Translation")

#     # File uploader for input image
#     st.sidebar.title("Upload Image")
#     uploaded_image = st.sidebar.file_uploader("Upload your ancient inscription image", type=["jpg", "png"])

#     # Button to start processing
#     if uploaded_image is not None:
#         if st.sidebar.button("Process", key="process_button_1"):
#             # Convert the uploaded image to a format suitable for OpenCV
#             image = Image.open(uploaded_image)
#             image = np.array(image)

#             # Preprocessing
#             st.subheader("1. Preprocessing")
#             preprocessed_image = preprocess_image(image)
#             st.image(preprocessed_image, caption="Preprocessed Image", use_column_width=True, channels="GRAY")

#             # Character segmentation
#             st.subheader("2. Character Segmentation")
#             temp_dir = "temp_segments"
#             if not os.path.exists(temp_dir):
#                 os.makedirs(temp_dir)
            
#             output_folder = extract_images(preprocessed_image, temp_dir)
#             st.image([os.path.join(output_folder, img) for img in os.listdir(output_folder)], caption="Segmented Characters", use_column_width=True)

#             # Character recognition
#             st.subheader("3. Character Recognition")
#             recognized_text = recognize_characters(temp_dir)
#             st.text("Recognized Text:")
#             st.text(recognized_text)

# # Run the Streamlit application
# if __name__ == "__main__":
#     main()

