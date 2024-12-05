import os
import time
import requests
import streamlit as st
from dotenv import find_dotenv, load_dotenv
from transformers import pipeline
from typing import Any

# Load environment variables
load_dotenv(find_dotenv())
HUGGINGFACE_API_TOKEN = os.getenv("HUGGINGFACE_API_TOKEN")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Define a simple progress bar function
def progress_bar(amount_of_time: int) -> Any:
    progress_text = "Please wait, Generative models are hard at work..."
    my_bar = st.progress(0, text=progress_text)

    for percent_complete in range(amount_of_time):
        time.sleep(0.04)
        my_bar.progress(percent_complete + 1, text=progress_text)
    time.sleep(1)
    my_bar.empty()

# Function to generate a text description from the image using the BLIP model
def generate_text_from_image(image_path: str) -> str:
    image_to_text = pipeline("image-to-text", model="Salesforce/blip-image-captioning-base")
    generated_text = image_to_text(image_path)[0]["generated_text"]
    return generated_text

# Function to generate a short story based on the image description using Gemini API
def generate_story_from_text(scenario: str) -> str:
    API_URL = "https://api.gemini.com/v1/generate-text"  # Replace with actual Gemini API URL
    headers = {
        "Authorization": f"Bearer {GEMINI_API_KEY}",
        "Content-Type": "application/json",
    }
    payload = {
        "prompt": f"Create an exciting short story based on the following description: {scenario}",
        "max_tokens": 150,
        "temperature": 0.9,
    }

    response = requests.post(API_URL, headers=headers, json=payload)
    response_data = response.json()

    if response.status_code == 200 and "text" in response_data:
        generated_story = response_data["text"]
        return generated_story
    else:
        raise Exception(f"Gemini API Error: {response_data.get('error', 'Unknown error')}")

# Function to generate speech from the story using Hugging Face's TTS model
def generate_speech_from_text(message: str) -> Any:
    API_URL = "https://api-inference.huggingface.co/models/espnet/kan-bayashi_ljspeech_vits"
    headers = {"Authorization": f"Bearer {HUGGINGFACE_API_TOKEN}"}
    payload = {
        "inputs": message
    }

    response = requests.post(API_URL, headers=headers, json=payload)
    if response.status_code == 200:
        with open("generated_audio.flac", "wb") as file:
            file.write(response.content)
    else:
        raise Exception("Failed to generate speech from text")

# Main function to tie everything together
def main() -> None:
    st.set_page_config(page_title="Image-to-Story Converter", page_icon="🖼️")

    st.header("Image-to-Story Converter")
    uploaded_file = st.file_uploader("Please choose a file to upload", type="jpg")

    if uploaded_file is not None:
        st.image(uploaded_file, caption="Uploaded Image", use_column_width=True)

        # Save the uploaded image to a file
        image_path = uploaded_file.name
        with open(image_path, "wb") as file:
            file.write(uploaded_file.getvalue())

        # Display a progress bar while the models work
        progress_bar(100)

        # Generate a description of the image
        scenario = generate_text_from_image(image_path)

        # Generate a short story based on the description
        story = generate_story_from_text(scenario)

        # Generate speech from the generated story
        generate_speech_from_text(story)

        with st.expander("Generated Image Description"):
            st.write(scenario)
        with st.expander("Generated Short Story"):
            st.write(story)

        # Play the generated audio file
        st.audio("generated_audio.flac")

if __name__ == "__main__":
    main()
