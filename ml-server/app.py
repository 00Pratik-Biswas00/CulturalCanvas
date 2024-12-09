import os
from flask import Flask
from flask_cors import CORS
from routes.budget_routes import budget_bp
from routes.nearest_attractions_routes import nearest_attractions_bp
from routes.nude_detection_routes import nude_detection_bp
from routes.lang_translation_routes import translation_bp
from routes.image_to_story_routes import image_to_story_bp

from dotenv import load_dotenv

load_dotenv()

cors_origin = os.getenv("FLASK_CORS_ORIGIN", "*")  # Fallback to '*' if not set

app = Flask(__name__)
CORS(app, origins=[cors_origin])

# Register Blueprints
app.register_blueprint(budget_bp, url_prefix="/api")
app.register_blueprint(nearest_attractions_bp, url_prefix="/api")
app.register_blueprint(nude_detection_bp, url_prefix="/api")
app.register_blueprint(translation_bp, url_prefix="/api")
app.register_blueprint(image_to_story_bp, url_prefix="/api")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
