import os
import cv2  # OpenCV for image processing
import pytesseract  # OCR for text recognition
from googletrans import Translator  # Google Translate API for translation

# Set path for uploads
UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), "uploads")

# Ensure upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

"""
    Preprocess the image for better OCR results.
    Args:
        image_path (str): Path to the input image.
    Returns:
        processed_image (numpy.ndarray): Preprocessed image.
"""
def preprocess_image(image_path):
    try:
        image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
        _, thresh = cv2.threshold(image, 128, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)
        return thresh
    except Exception as e:
        print(f"Error in preprocessing: {e}")
        return None


"""
    Segment the image into smaller regions if needed.
    Args:
        image (numpy.ndarray): Preprocessed image.
    Returns:
        list: List of image segments (if any).
"""
def segment_image(image):
    try:
        # For simplicity, return the whole image as one segment.
        return [image]
    except Exception as e:
        print(f"Error in segmentation: {e}")
        return []


"""
    Recognize text from the image segments using OCR.
    Args:
        segments (list): List of image segments.
    Returns:
        str: Recognized text.
"""
def recognize_text(segments):
    try:
        full_text = ""
        for segment in segments:
            text = pytesseract.image_to_string(segment, lang="eng")  # Adjust language as needed
            full_text += text + "\n"
        return full_text.strip()
    except Exception as e:
        print(f"Error in text recognition: {e}")
        return ""


"""
    Translate the recognized text to the target language.
    Args:
        text (str): Recognized text.
        target_language (str): Target language code (default: "en").
    Returns:
        str: Translated text.
"""
def translate_text(text, target_language="en"):
    try:
        translator = Translator()
        translated = translator.translate(text, dest=target_language)
        return translated.text
    except Exception as e:
        print(f"Error in translation: {e}")
        return ""


"""
    Full pipeline to process an image, recognize text, and translate it.
    Args:
        file_path (str): Path to the input image.
        target_language (str): Target language code (default: "en").
    Returns:
        str: Final translated text.
"""
def process_image(file_path, target_language="en"):
    # Step 1: Preprocess the image
    preprocessed_image = preprocess_image(file_path)
    if preprocessed_image is None:
        return "Error in preprocessing image."

    # Step 2: Segment the image
    segments = segment_image(preprocessed_image)
    if not segments:
        return "Error in segmenting image."

    # Step 3: Recognize text
    recognized_text = recognize_text(segments)
    if not recognized_text:
        return "Error in recognizing text."

    # Step 4: Translate text
    translated_text = translate_text(recognized_text, target_language)
    if not translated_text:
        return "Error in translating text."

    return translated_text


# Example usage (for testing)
if __name__ == "__main__":
    # Assuming an image is uploaded to the uploads folder
    test_image_path = os.path.join(UPLOAD_FOLDER, "test_image.jpg")
    
    # Ensure there's a sample image for testing
    if os.path.exists(test_image_path):
        output = process_image(test_image_path, target_language="es")  # Translate to Spanish
        print("Translated Text:\n", output)
    else:
        print(f"No test image found at {test_image_path}. Upload an image first.")
