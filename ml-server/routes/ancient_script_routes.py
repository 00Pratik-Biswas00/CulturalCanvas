from flask import Blueprint, request, jsonify
import os
from ml.ancient_script_translation.ancient_script_translation import process_image

# Define the Blueprint
ancient_script_bp = Blueprint('ancient_script', __name__)

UPLOAD_FOLDER = "ml/ancient_script_translation/uploads"

@ancient_script_bp.route('/upload-ancient-scripts', methods=['POST'])
def upload_and_process():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    if file:
        # Save the file to the uploads directory
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)
        
        # Get target language from the request (default to English)
        target_language = request.form.get('language', 'en')
        
        # Process the image and translate the text
        translated_text = process_image(file_path, target_language)
        
        # Clean up the uploaded file after processing
        os.remove(file_path)
        
        return jsonify({"translated_text": translated_text}), 200
    
    return jsonify({"error": "File processing failed"}), 500
