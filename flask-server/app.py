from flask import Flask, request, render_template
import pandas as pd
import numpy as np
import joblib

app = Flask(__name__)
df=pd.read_csv("flask-server/heritage_budget.csv")
# Load the trained model and label encoders
model = joblib.load('flask-server/budget_prediction_new.pkl')
label_encoder_source = joblib.load('flask-server/label_encoder_source.pkl')
label_encoder_destination = joblib.load('flask-server/label_encoder_destination.pkl')

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

@app.route('/', methods=['GET', 'POST'])
def index():
    prediction = None
    if request.method == 'POST':
        source = request.form['source']
        destination = request.form['destination']
        duration = int(request.form['duration'])
        travel_preference = request.form['travel_preference']
        
        prediction = predict_budget(source, destination, duration, travel_preference)
    
    return render_template('index.html', 
                           sources=sources, 
                           destinations=destinations, 
                           prediction=prediction)

if __name__ == '__main__':
    app.run(debug=True)
