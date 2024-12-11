from flask import Blueprint, request, jsonify
import pickle
import numpy as np
from ml.product_recommendation.utils import get_stores_data

# Create a Blueprint for recommendation routes
recommendation_bp = Blueprint('recommendation_routes', __name__)

# Load the recommendation model
with open('ml/product_recommendation/location_recommendation_model.pkl', 'rb') as f:
    recommendation_model = pickle.load(f)


@recommendation_bp.route('/recommend-products', methods=['POST'])
def recommend():
    user_location = request.json
    user_lat = user_location['latitude']
    user_lon = user_location['longitude']

    try:
        # Find nearest products based on coordinates
        distances, indices = recommendation_model.kneighbors([[user_lat, user_lon]])
        recommendations = []

        products_data = get_stores_data()  # Fetch all products

        for idx, distance in zip(indices[0], distances[0]):
            product = products_data[idx]  # Get the product based on the model's recommendation
            # Add the product data along with the distance
            product_with_distance = {**product, "distance_km": round(distance, 2)}
            recommendations.append(product_with_distance)

        return jsonify(recommendations=recommendations)
    except Exception as e:
        return jsonify({"error": str(e)}), 500