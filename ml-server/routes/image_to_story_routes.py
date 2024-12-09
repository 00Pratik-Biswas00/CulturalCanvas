import os
from flask import Blueprint, request, jsonify, send_file
from werkzeug.utils import secure_filename
from ml.image_to_story.blip_model import generate_image_description
from ml.image_to_story.gemini_model import  get_gemini_response
from ml.image_to_story.tts_model import text_to_audio

image_to_story_bp = Blueprint('image_to_story', __name__)
UPLOAD_FOLDER = "ml/image_to_story/uploads"

# Ensure the uploads directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Endpoint to process an uploaded image and generate a story with audio.
@image_to_story_bp.route("/image-to-story", methods=["POST"])
def image_to_story():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    # Save uploaded file
    filename = secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)

    try:
        # Generate image description
        description = generate_image_description(file_path)

        # Generate response from Gemini
        gemini_response = get_gemini_response(description)
        intro, story = gemini_response.split("\n\n", 1) if "\n\n" in gemini_response else (gemini_response, "")

        # Generate audio from story
        #audio_buffer = text_to_audio(story)

        # Return response
        return jsonify({
            "description": description,
            "introduction": intro,
            "story": story,
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Endpoint to generate and download audio for a given text.
@image_to_story_bp.route("/audio", methods=["POST"])
def generate_audio():
    text = request.json.get("text")
    if not text:
        return jsonify({"error": "Text is required"}), 400

    audio_buffer = text_to_audio(text)
    return send_file(audio_buffer, as_attachment=True, download_name="story.mp3", mimetype="audio/mp3")
