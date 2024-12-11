from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)

# Replace with your Google Maps API key
GOOGLE_MAPS_API_KEY = "AIzaSyAtsC9mZQ6RbN6A9TvGU40yXtxJhVGX9uE"

# Mock data for stores and products in Raipur, India
stores = [
    {"id": 1, "name": "Raipur Mart", "city": "Raipur", "latitude": 21.2514, "longitude": 81.6296, "products": [
        {"name": "Chhattisgarh Handicrafts", "description": "Beautiful handcrafted items made in Chhattisgarh.", "price": "Rs. 500", "image_url": "https://via.placeholder.com/150"},
        {"name": "Organic Rice", "description": "Locally grown organic rice.", "price": "Rs. 1200", "image_url": "https://via.placeholder.com/150"},
        {"name": "Mahua Drink", "description": "Traditional Mahua drink from Chhattisgarh.", "price": "Rs. 300", "image_url": "https://via.placeholder.com/150"},
        {"name": "Terracotta Items", "description": "Exquisite terracotta art from local artisans.", "price": "Rs. 800", "image_url": "https://via.placeholder.com/150"},
        {"name": "Bamboo Crafts", "description": "Eco-friendly bamboo craft products.", "price": "Rs. 600", "image_url": "https://via.placeholder.com/150"},
        {"name": "Kosa Silk Stoles", "description": "Elegant silk stoles perfect for any occasion.", "price": "Rs. 1500", "image_url": "https://via.placeholder.com/150"},
        {"name": "Tribal Jewelry", "description": "Ethnic jewelry crafted by local tribes.", "price": "Rs. 1000", "image_url": "https://via.placeholder.com/150"}
    ]},
    {"id": 2, "name": "Raipur Central", "city": "Raipur", "latitude": 21.2564, "longitude": 81.6378, "products": [
        {"name": "Kosa Silk Saree", "description": "Authentic Chhattisgarh Kosa silk saree.", "price": "Rs. 2500", "image_url": "https://via.placeholder.com/150"},
        {"name": "Pickles", "description": "Homemade pickles in a variety of flavors.", "price": "Rs. 150", "image_url": "https://via.placeholder.com/150"},
        {"name": "Handmade Jewelry", "description": "Unique jewelry crafted by local artisans.", "price": "Rs. 700", "image_url": "https://via.placeholder.com/150"}
    ]},
    {"id": 3, "name": "Raipur Emporium", "city": "Raipur", "latitude": 21.2634, "longitude": 81.6445, "products": [
        {"name": "Wooden Toys", "description": "Traditional wooden toys from Chhattisgarh.", "price": "Rs. 400", "image_url": "https://via.placeholder.com/150"},
        {"name": "Herbal Tea", "description": "Organic herbal tea blends.", "price": "Rs. 250", "image_url": "https://via.placeholder.com/150"},
        {"name": "Metal Crafts", "description": "Handcrafted metal artifacts.", "price": "Rs. 1200", "image_url": "https://via.placeholder.com/150"}
    ]}
]

# Helper function 
def calculate_distance(lat1, lon1, lat2, lon2):
    from math import radians, cos, sin, sqrt, atan2
    R = 6371  # Earth's radius in km

    dlat = radians(lat2 - lat1)
    dlon = radians(lon2 - lon1)
    a = sin(dlat / 2) ** 2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    return R * c

@app.route('/')
def home():
    return render_template('index.html', google_maps_api_key=GOOGLE_MAPS_API_KEY)

@app.route('/recommend', methods=['POST'])
def recommend():
    user_location = request.json
    user_lat = user_location['latitude']
    user_lon = user_location['longitude']

    recommendations = []

    for store in stores:
        distance = calculate_distance(user_lat, user_lon, store['latitude'], store['longitude'])
        if distance <= 30:  # Within x km radius
            for product in store['products']:
                recommendations.append({
                    "store_name": store['name'],
                    "city": store['city'],
                    "product_name": product['name'],
                    "description": product['description'],
                    "price": product['price'],
                    "image_url": product['image_url'],
                    "distance_km": round(distance, 2)
                })

    current_location_url = f"https://www.google.com/maps?q={user_lat},{user_lon}"

    return jsonify({"recommendations": recommendations, "current_location_url": current_location_url})

if __name__ == '__main__':
    app.run(debug=True)
