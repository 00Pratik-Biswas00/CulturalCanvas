from flask import Flask
from flask_cors import CORS
from routes.budget_routes import budget_bp
from routes.nearest_attractions_routes import attractions_bp
from routes.nude_detection_routes import nude_detection_routes

app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(budget_bp)
app.register_blueprint(attractions_bp)
app.register_blueprint(nude_detection_routes)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
