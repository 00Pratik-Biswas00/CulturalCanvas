from flask import Blueprint, request, jsonify
from ml.nearest_attraction.nearest_attractions import find_nearest_places

# Create a Blueprint for attraction routes
nearest_attractions_bp = Blueprint('attractions_routes', __name__)

GOOGLE_MAPS_API_KEY = "AIzaSyAtsC9mZQ6RbN6A9TvGU40yXtxJhVGX9uE"

@nearest_attractions_bp.route("/find-attractions", methods=['POST'])
def get_attractions():
    data = request.get_json()
    place_lat = data.get("latitude")
    place_long = data.get("longitude")
    attraction_type = data.get("attraction")
    radius = request.json.get('radius', 100) * 1000
    
    if not place_lat or not place_long or not attraction_type:
        return jsonify({"error": "Missing required parameters"}), 400

    try:
        user_location = (place_lat, place_long)
        attractions = find_nearest_places(user_location, attraction_type, radius)
        for attraction in attractions:
            if attraction['photo_reference']:
                attraction['photo_url'] = f"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference={attraction['photo_reference']}&key={GOOGLE_MAPS_API_KEY}"

        return jsonify({'status': 'success', 'attractions': attractions})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
