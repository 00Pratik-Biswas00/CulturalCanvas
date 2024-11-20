import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import joblib
from geopy.geocoders import Nominatim
from geopy.distance import geodesic
import overpy
from dotenv import load_dotenv

load_dotenv()

cors_origin = os.getenv("FLASK_CORS_ORIGIN", "*")  # Fallback to '*' if not set

app = Flask(__name__)
CORS(app, origins=[cors_origin])

df=pd.read_csv("heritage_budget.csv")
# Load the trained model and label encoders
model = joblib.load('budget_prediction_new.pkl')
label_encoder_source = joblib.load('label_encoder_source.pkl')
label_encoder_destination = joblib.load('label_encoder_destination.pkl')

# Unique sources and destinations
sources = ['Delhi', 'Mumbai', 'Kolkata', 'Jaipur', 'Agra', 'Chennai', 
            'Bangalore', 'Hyderabad', 'Pune', 'Ahmedabad', 'Lucknow', 
            'Patna', 'Indore', 'Vadodara', 'Surat', 'Nagpur', 
            'Coimbatore', 'Madurai', 'Visakhapatnam', 'Chandigarh', 
            'Dehradun']

destinations = ['Taj Mahal', 'Agra Fort', 'Ajanta Caves', 'Ellora Caves', 
                'Buddhist Monuments at Sanchi', 'Champaner-Pavagadh', 
                'Chhatrapati Shivaji Terminus', 'Churches and Convents of Goa', 
                'Fatehpur Sikri', 'Great Living Chola Temples', 
                'Group of Monuments at Hampi', 'Group of Monuments at Mahabalipuram', 
                'Group of Monuments at Pattadakal', 'Hill Forts of Rajasthan', 
                'Historic City of Ahmedabad', "Humayun's Tomb", 'Jaipur City', 
                'Kaziranga National Park', 'Keoladeo National Park', 
                'Khajuraho Group of Monuments', 'Mahabodhi Temple Complex at Bodh Gaya', 
                'Mountain Railways of India', 'Qutb Minar', 'Rani ki Vav', 'Red Fort', 
                'Rock Shelters of Bhimbetka', 'Sun Temple, Konark', 
                'Sundarbans National Park', 'The Architectural Work of Le Corbusier', 
                'The Jantar Mantar, Jaipur', 'The Western Ghats', 
                'Victorian Gothic and Art Deco', 'Great Himalayan National Park', 
                'Khangchendzonga National Park', 'Bishnupur Temples', 'Golconda Fort', 
                'Meenakshi Amman Temple', 'Chittorgarh Fort', 'Kumbhalgarh Fort', 
                'Hawa Mahal', 'Ranthambore Fort', 'Leh Palace', 'Orchha', 
                'Gwalior Fort', 'Mandu', 'Rajasthan Stepwells', 
                'Rani Rupmati Pavilion', 'Gingee Fort', 'Panhala Fort', 
                'Bidar Fort', 'Saraswathi Mahal Library', 'Lucknow Residency', 
                'Murshidabad', 'Madurai', 'Chettinad', 'Kodaikanal']

def handle_unseen_label(label, label_encoder):
    if label not in label_encoder.classes_:
        # Add the new label to the classes
        new_classes = np.append(label_encoder.classes_, label)
        label_encoder.classes_ = new_classes
    return label_encoder.transform([label])[0]

def predict_budget(source, destination, duration, travel_preference):
    source_encoded = handle_unseen_label(source, label_encoder_source)
    destination_encoded = handle_unseen_label(destination, label_encoder_destination)
    
    # Handling default travel preferences
    if duration < 5:
        travel_preference = 'Flight'
    
    # Prepare input features
    local_travel_cost = df['Local Travel Cost (INR)'].mean()
    hotel_cost = df['Hotel Cost (INR)'].mean()
    food_cost = df['Food Cost (INR)'].mean()

    input_data = np.array([[source_encoded, destination_encoded, duration, 
                            local_travel_cost, hotel_cost, food_cost]])

    # Predict the budget
    predicted_budget = model.predict(input_data)
    
    # Adjust budget based on travel preference and duration
    if travel_preference == 'Train':
        budget = predicted_budget[0][0]
    elif travel_preference == 'Flight':
        budget = predicted_budget[0][1]
    else:
        budget = (predicted_budget[0][0] + predicted_budget[0][1]) / 2

    # Increase the budget if the duration is more than 6 days
    if duration > 6:
        extra_days = duration - 6
        # Increase the budget by 10% for each extra day
        budget += budget * 0.10 * extra_days
    # Round the budget to 2 decimal places
    budget = round(budget, 2)
    return budget

@app.route('/api/predict-budget', methods=['GET','POST'])
def predict():
    data = request.json
    source = data['source']
    destination = data['destination']
    duration = int(data['duration'])
    travel_preference = data['travel_preference']
    
    # Get prediction
    prediction = predict_budget(source, destination, duration, travel_preference)
    
    # Return the prediction as JSON
    return jsonify({'budget': prediction})

geolocator = Nominatim(user_agent="nearest_attraction_finder")
api = overpy.Overpass()

# Function to get coordinates of a place
def get_coordinates(place_name):
    location = geolocator.geocode(place_name)
    if location:
        return (location.latitude, location.longitude)
    else:
        return None

# Route to find nearest attractions (updated to work with the React frontend)
@app.route("/api/find-attractions", methods=['GET','POST'])
def find_attractions():
    try:
        data = request.get_json()  # Receive JSON data from the request
        place_name = data.get("place")
        attraction_type = data.get("attraction")

        # Validate input and find nearest places
        if place_name and attraction_type:
            user_location = get_coordinates(place_name)
            if user_location:
                attractions_sorted = find_nearest_places(user_location, attraction_type, radius=30000)

                # Return the results as a JSON response
                return jsonify({
                    "place_name": place_name,
                    "attraction_type": attraction_type,
                    "attractions": attractions_sorted
                })

            else:
                return jsonify({"error": "Place not found. Please check the name and try again."}), 400
        else:
            return jsonify({"error": "Invalid input. Place and attraction type are required."}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Function to find nearest places based on user input
def find_nearest_places(user_location, attraction_type, radius=30000):  # Radius set to 30 km
    # OSM tags for various attraction types
    attraction_types = {
        "tourist_spots": '["tourism"~"attraction|museum|monument|zoo|theme_park|viewpoint"]',
        "restaurants": '["amenity"="restaurant"]',
        "hotels": '["tourism"="hotel"]',
        "hospitals": '["amenity"="hospital"]',
        "police_stations": '["amenity"="police"]'  # New entry for police stations
    }

    if attraction_type not in attraction_types:
        return []

    # Overpass query for the given attraction type
    query = f"""
    node{attraction_types[attraction_type]}(around:{radius},{user_location[0]},{user_location[1]});
    out body;
    """
    result = api.query(query)

    # Store attractions with distances, excluding unnamed locations
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

    # Sort attractions by distance and return the results
    attractions_sorted = sorted(attractions, key=lambda x: x['distance'])
    
    return attractions_sorted[:20]

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)