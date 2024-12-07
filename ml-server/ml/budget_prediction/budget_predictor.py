import os
import numpy as np
import pandas as pd
import joblib

# Load the trained model and label encoders
model = joblib.load('budget_prediction_new.pkl')
label_encoder_source = joblib.load('label_encoder_source.pkl')
label_encoder_destination = joblib.load('label_encoder_destination.pkl')

df = pd.read_csv("heritage_budget.csv")

def handle_unseen_label(label, label_encoder):
    if label not in label_encoder.classes_:
        new_classes = np.append(label_encoder.classes_, label)
        label_encoder.classes_ = new_classes
    return label_encoder.transform([label])[0]

def predict_budget(source, destination, duration, travel_preference):
    source_encoded = handle_unseen_label(source, label_encoder_source)
    destination_encoded = handle_unseen_label(destination, label_encoder_destination)
    
    if duration < 5:
        travel_preference = 'Flight'
    
    local_travel_cost = df['Local Travel Cost (INR)'].mean()
    hotel_cost = df['Hotel Cost (INR)'].mean()
    food_cost = df['Food Cost (INR)'].mean()

    input_data = np.array([[source_encoded, destination_encoded, duration, 
                            local_travel_cost, hotel_cost, food_cost]])
    predicted_budget = model.predict(input_data)
    
    if travel_preference == 'Train':
        budget = predicted_budget[0][0]
    elif travel_preference == 'Flight':
        budget = predicted_budget[0][1]
    else:
        budget = (predicted_budget[0][0] + predicted_budget[0][1]) / 2

    if duration > 6:
        extra_days = duration - 6
        budget += budget * 0.10 * extra_days

    return round(budget, 2)
