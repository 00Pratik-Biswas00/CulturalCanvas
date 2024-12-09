from geopy.geocoders import Nominatim
from geopy.distance import geodesic
import overpy

geolocator = Nominatim(user_agent="nearest_attraction_finder")
api = overpy.Overpass()

# Function to get coordinates of a place
def get_coordinates(place_name):
    location = geolocator.geocode(place_name)
    if location:
        return (location.latitude, location.longitude)
    else:
        return None

# Function to find nearest places based on user input
def find_nearest_places(user_location, attraction_type, radius=30000):
    attraction_types = {
        "tourist_spots": '["tourism"~"attraction|museum|monument|zoo|theme_park|viewpoint"]',
        "restaurants": '["amenity"="restaurant"]',
        "hotels": '["tourism"="hotel"]',
        "hospitals": '["amenity"="hospital"]',
        "police_stations": '["amenity"="police"]'
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
            
            attractions.append({
                'name': node.tags.get("name"),
                'location': attraction_location,
                'distance': distance,
                'link': google_maps_link
            })

    attractions_sorted = sorted(attractions, key=lambda x: x['distance'])
    return attractions_sorted[:20]
