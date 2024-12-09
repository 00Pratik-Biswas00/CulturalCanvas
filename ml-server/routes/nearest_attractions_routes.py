from flask import Blueprint, request, jsonify
from ml.nearest_attraction.nearest_attractions import get_coordinates, find_nearest_places

# Create a Blueprint for attraction routes
nearest_attractions_bp = Blueprint('attractions_routes', __name__)

@nearest_attractions_bp.route("/api/find-attractions", methods=['POST'])
def find_attractions():
    data = request.get_json()
    place_name = data.get("place")
    attraction_type = data.get("attraction")

    if not place_name or not attraction_type:
        return jsonify({"error": "Missing required parameters"}), 400

    try:
        user_location = get_coordinates(place_name)
        if not user_location:
            return jsonify({"error": "Place not found. Please check the name and try again."}), 400

        attractions_sorted = find_nearest_places(user_location, attraction_type, radius=30000)
        return jsonify({
            "place_name": place_name,
            "attraction_type": attraction_type,
            "attractions": attractions_sorted
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
