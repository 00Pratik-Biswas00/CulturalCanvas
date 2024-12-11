import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors
import pickle
from .utils import get_stores_data

"""
Convert stores data into a DataFrame format with relevant location info for the recommendation system.
"""
def prepare_store_data(stores):
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


"""
Train a nearest neighbors model to recommend stores based on geographic location.
"""
def train_location_recommendation_model(store_df):
    store_locations = store_df[['latitude', 'longitude']].values
    store_locations_rad = np.radians(store_locations)  # Convert degrees to radians

    # Initialize NearestNeighbors model with haversine metric
    neighbors_model = NearestNeighbors(n_neighbors=3, metric='haversine')
    neighbors_model.fit(store_locations_rad)

    # Save the model
    with open('location_recommendation_model.pkl', 'wb') as f:
        pickle.dump(neighbors_model, f)
    
    return neighbors_model

if __name__ == '__main__':
    stores_data = get_stores_data()
    stores_df = prepare_store_data(stores_data)
    train_location_recommendation_model(stores_df)
    print("Model training complete and saved.")