import streamlit as st
from vid_app import nude_video_app
from img_app import nude_image_app

st.set_page_config(page_title="Nudity Detector")
def main():
    app_selection = st.sidebar.radio("Select App", ("Nudity Detection Video App", "Nudity Detection Image App"))
    if app_selection == "Nudity Detection Video App":
        nude_video_app()
    elif app_selection == "Nudity Detection Image App":
        nude_image_app()


if __name__ == "__main__":
    main()
