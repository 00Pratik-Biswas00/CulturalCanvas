import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors
import pickle

# Sample store data structure
stores_data = [
    {"id": 1, "name": "Raipur Mart", "city": "Raipur", "latitude": 21.2514, "longitude": 81.6296, "products": [
        {"name": "Chhattisgarh Handicrafts", "description": "Beautiful handcrafted items made in Chhattisgarh.", "price": 500, "image_url": "https://via.placeholder.com/150"},
        {"name": "Organic Rice", "description": "Locally grown organic rice.", "price": 1200, "image_url": "https://via.placeholder.com/150"},
        {"name": "Mahua Drink", "description": "Traditional Mahua drink from Chhattisgarh.", "price": 300, "image_url": "https://via.placeholder.com/150"},
        {"name": "Terracotta Items", "description": "Exquisite terracotta art from local artisans.", "price": 800, "image_url": "https://via.placeholder.com/150"},
        {"name": "Bamboo Crafts", "description": "Eco-friendly bamboo craft products.", "price": 600, "image_url": "https://via.placeholder.com/150"},
        {"name": "Kosa Silk Stoles", "description": "Elegant silk stoles perfect for any occasion.", "price": 1500, "image_url": "https://via.placeholder.com/150"},
        {"name": "Tribal Jewelry", "description": "Ethnic jewelry crafted by local tribes.", "price": 1000, "image_url": "https://via.placeholder.com/150"}
    ]},
    {"id": 2, "name": "Raipur Central", "city": "Raipur", "latitude": 21.2564, "longitude": 81.6378, "products": [
        {"name": "Kosa Silk Saree", "description": "Authentic Chhattisgarh Kosa silk saree.", "price": 2500, "image_url": "https://via.placeholder.com/150"},
        {"name": "Pickles", "description": "Homemade pickles in a variety of flavors.", "price": 150, "image_url": "https://via.placeholder.com/150"},
        {"name": "Handmade Jewelry", "description": "Unique jewelry crafted by local artisans.", "price": 700, "image_url": "https://via.placeholder.com/150"}
    ]},
    {"id": 3, "name": "Raipur Emporium", "city": "Raipur", "latitude": 21.2634, "longitude": 81.6445, "products": [
        {"name": "Wooden Toys", "description": "Traditional wooden toys from Chhattisgarh.", "price": 400, "image_url": "https://via.placeholder.com/150"},
        {"name": "Herbal Tea", "description": "Organic herbal tea blends.", "price": 250, "image_url": "https://via.placeholder.com/150"},
        {"name": "Metal Crafts", "description": "Handcrafted metal artifacts.", "price": 1200, "image_url": "https://via.placeholder.com/150"}
    ]}
]

def prepare_store_data(stores):
    """
    Convert stores data into a DataFrame format with relevant location info for the recommendation system.
    """
    store_info = []
    for store in stores:
        store_info.append({
            "id": store["id"],
            "name": store["name"],
            "city": store["city"],
            "latitude": store["latitude"],
            "longitude": store["longitude"]
        })
    return pd.DataFrame(store_info)

def train_location_recommendation_model(store_df):
    """
    Train a nearest neighbors model to recommend stores based on geographic location.
    """
    store_locations = store_df[['latitude', 'longitude']].values
    store_locations_rad = np.radians(store_locations)  # Convert degrees to radians

    # Initialize NearestNeighbors model with haversine metric
    neighbors_model = NearestNeighbors(n_neighbors=3, metric='haversine')
    neighbors_model.fit(store_locations_rad)

    # Save the model
    with open('location_recommendation_model.pkl', 'wb') as f:
        pickle.dump(neighbors_model, f)
    
    return neighbors_model


# stores_df = prepare_store_data(stores_data)

# model = train_location_recommendation_model(stores_df)

print("Model training complete and saved.")
