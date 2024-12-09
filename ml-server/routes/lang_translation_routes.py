from flask import Blueprint, request, jsonify
from ml.language_translator.language_translator import translate_text

translation_bp = Blueprint("translation", __name__)

@translation_bp.route("/translate", methods=["POST"])
def translate():
    data = request.get_json()
    text = data.get("text")
    language = data.get("language")

    translated_text, error = translate_text(text, language)

    if error:
        return jsonify({"error": error}), 400
    return jsonify({"translation": translated_text})
