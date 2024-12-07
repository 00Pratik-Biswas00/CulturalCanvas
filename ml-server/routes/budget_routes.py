from flask import Blueprint, request, jsonify
from ml.budget_prediction.budget_predictor import predict_budget

# Create a Blueprint for budget routes
budget_bp = Blueprint('budget_routes', __name__)

@budget_bp.route('/api/predict-budget', methods=['POST'])
def predict():
    data = request.json
    source = data.get('source')
    destination = data.get('destination')
    duration = int(data.get('duration'))
    travel_preference = data.get('travel_preference')

    if not source or not destination or not duration or not travel_preference:
        return jsonify({"error": "Missing required parameters"}), 400

    try:
        prediction = predict_budget(source, destination, duration, travel_preference)
        return jsonify({'budget': prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
