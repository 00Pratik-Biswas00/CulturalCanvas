import streamlit as st
import cv2
import numpy as np
from NudeDetector.NudeDetector import NudeDetector


def nude_image_app():
    st.title("Image Nudity Detection App")

    uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])

    if uploaded_file is not None:
        image = cv2.imdecode(np.fromstring(uploaded_file.read(), np.uint8), cv2.IMREAD_UNCHANGED)
        detector = NudeDetector(image)

        st.subheader("Nudity Detection Result:")
        if detector.is_nude():
            st.error("Image is Nude")
        else:
            st.success("Image is Safe")
        col1, col2 = st.columns([1, 1])
        with col1:
            st.subheader("Visualized Image:")
            st.image(cv2.cvtColor(detector.visualize(), cv2.COLOR_BGR2RGB), caption='Visualized Image', use_column_width=True)
        with col2:
            st.subheader("Nudity Blurred Image:")
            st.image(cv2.cvtColor(detector.blur_nudity(), cv2.COLOR_BGR2RGB), caption='Nudity Blurred Image', use_column_width=True)


if __name__ == "__main__":
    nude_image_app()
