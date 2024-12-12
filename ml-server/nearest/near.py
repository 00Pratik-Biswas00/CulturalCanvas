from flask import Flask, render_template, request, jsonify
from geopy.geocoders import Nominatim
from geopy.distance import geodesic
import overpy
import requests


app = Flask(__name__)

geolocator = Nominatim(user_agent="nearest_attraction_finder")
api = overpy.Overpass()

GOOGLE_MAPS_API_KEY = "AIzaSyAtsC9mZQ6RbN6A9TvGU40yXtxJhVGX9uE"

def get_user_coordinates():
    url = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + GOOGLE_MAPS_API_KEY
    payload = {"considerIp": True}

    response = requests.post(url, json=payload)

    if response.status_code == 200:
        location_data = response.json().get("location")
        return (location_data["lat"], location_data["lng"])
    else:
        raise Exception("Failed to fetch user location. Ensure Google Maps API is correctly configured.")


def get_place_details(place_name):
    url = f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key={GOOGLE_MAPS_API_KEY}&input={place_name}&inputtype=textquery&fields=name,rating,formatted_address,photos"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data.get("candidates"):
            place = data["candidates"][0]
            details = {
                "name": place.get("name"),
                "rating": place.get("rating", "N/A"),
                "address": place.get("formatted_address", "N/A"),
                "photo_reference": None
            }

            if "photos" in place:
                photo_reference = place["photos"][0].get("photo_reference")
                details["photo_reference"] = photo_reference
            return details
    return None


def find_nearest_places(user_location, attraction_type, radius=30000):
    attraction_types = {
        "tourist_spots": '["tourism"~"attraction|museum|monument|zoo|theme_park|viewpoint"]',
        "restaurants": '["amenity"="restaurant"]',
        "hotels": '["tourism"="hotel"]',
        "hospitals": '["amenity"="hospital"]'
    }

    if attraction_type not in attraction_types:
        return []

    query = f"""
    node{attraction_types[attraction_type]}(around:{radius},{user_location[0]},{user_location[1]});
    out body;
    """
    result = api.query(query)

    attractions = []
    for node in result.nodes:
        if "name" in node.tags:
            attraction_location = (node.lat, node.lon)
            distance = geodesic(user_location, attraction_location).km
            google_maps_link = f"https://www.google.com/maps?q={node.lat},{node.lon}"

            details = get_place_details(node.tags.get("name"))

            if details:
                attractions.append({
                    'name': details['name'],
                    'rating': details['rating'],
                    'address': details['address'],
                    'photo_reference': details['photo_reference'],
                    'distance': round(distance, 2),
                    'link': google_maps_link
                })

    attractions_sorted = sorted(attractions, key=lambda x: x['distance'])
    return attractions_sorted[:20]



@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_attractions', methods=['POST'])
def get_attractions():
    try:
        user_location = get_user_coordinates()
        attraction_type = request.json.get('attraction_type', 'tourist_spots')
        radius = request.json.get('radius', 30000)

        attractions = find_nearest_places(user_location, attraction_type, radius)
        for attraction in attractions:
            if attraction['photo_reference']:
                attraction['photo_url'] = f"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference={attraction['photo_reference']}&key={GOOGLE_MAPS_API_KEY}"

        return jsonify({'status': 'success', 'attractions': attractions})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

if __name__ == "__main__":
    app.run(debug=True)
