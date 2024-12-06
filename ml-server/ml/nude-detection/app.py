from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import cv2
import numpy as np
from nude_detector import NudeDetector  # Import your NudeDetector class
import os

# Initialize the Flask app
app = Flask(__name__)

# Define the upload folder and allowed extensions
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Function to check allowed file types
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/detect-nudity', methods=['POST'])
def detect_nudity():
    # Check if an image file is present in the request
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400
    
    file = request.files['image']

    # Check if the file is valid
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    if not allowed_file(file.filename):
        return jsonify({'error': 'Unsupported file type'}), 400
    
    # Secure the filename and save the file
    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    # Load the image
    image = cv2.imread(filepath)

    # Check if the image was loaded successfully
    if image is None:
        return jsonify({'error': 'Invalid image file'}), 400

    # Initialize the NudeDetector
    detector = NudeDetector(image=image)

    # Perform nudity detection
    is_nude = detector.is_nude()

    # Clean up by removing the uploaded file
    os.remove(filepath)

    # Return the detection result
    return jsonify({'is_nude': is_nude})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)