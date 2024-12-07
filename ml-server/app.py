from flask import Flask
from flask_cors import CORS
from routes.budget_routes import budget_bp
from routes.nearest_attractions_routes import attractions_bp

app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(budget_bp)
app.register_blueprint(attractions_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
