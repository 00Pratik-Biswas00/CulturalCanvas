import streamlit as st
import cv2
import tempfile
import numpy as np
from NudeDetector.NudeDetector import NudeDetector


def nude_video_app():
    st.title("Video Nudity Detection App")
    uploaded_file = st.file_uploader("Upload a video", type=["mp4", "avi"])

    if uploaded_file is not None:
        with tempfile.NamedTemporaryFile(delete=False) as temp_file:
            temp_file.write(uploaded_file.read())
            uploaded_video_path = temp_file.name
        cap = cv2.VideoCapture(uploaded_video_path)
        skip_interval = 20
        frame_index = 0
        placeholder1 = st.empty()
        col1, col2 = st.columns([1, 1])
        with col1:
            placeholder2 = st.empty()
        with col2:
            placeholder3 = st.empty()
        while True:
            success, img = cap.read()
            if not success:
                break
            if frame_index % skip_interval == 0:
                detector = NudeDetector(img)

                if detector.is_nude():
                    placeholder1.error("Image is Nude")
                else:
                    placeholder1.success("Image is Safe")
                placeholder2.image(cv2.cvtColor(detector.visualize(), cv2.COLOR_BGR2RGB), caption='Visualized Image', use_column_width=True)
                placeholder3.image(cv2.cvtColor(detector.blur_nudity(), cv2.COLOR_BGR2RGB), caption='Nudity Blurred Image', use_column_width=True)
            frame_index += 1


if __name__ == "__main__":
    nude_video_app()
