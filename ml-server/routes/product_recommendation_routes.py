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
        # Find nearest stores
        distances, indices = recommendation_model.kneighbors([[user_lat, user_lon]])
        recommendations = []

        for idx in indices[0]:
            stores_data = get_stores_data()
            store = stores_data[idx]
            for product in store['products']:
                recommendations.append({
                    "store_name": store['name'],
                    "city": store['city'],
                    "product_name": product['name'],
                    "description": product['description'],
                    "price": product['price'],
                    "image_url": product['image_url'],
                    "distance_km": round(distances[0][idx], 2),
                    "store_location": {"lat": store['latitude'], "lng": store['longitude']}
                })

        return jsonify(recommendations=recommendations)
    except Exception as e:
        return jsonify({"error": str(e)}), 500