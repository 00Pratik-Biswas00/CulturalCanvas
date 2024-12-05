import cv2
from nudenet import NudeDetector

# Initialize the NudeDetector
detector = NudeDetector()

# Path to the video file
video_path = "./porn1_cut1.mp4"

# Define explicit labels for nudity detection (same as before)
specific_labels_exposed = {
    "BUTTOCKS_EXPOSED": 0.5,
    "FEMALE_BREAST_EXPOSED": 0.5,
    "FEMALE_GENITALIA_EXPOSED": 0.5,
    "MALE_BREAST_EXPOSED": 0.5,
    "ANUS_EXPOSED": 0.5,
    "BELLY_EXPOSED": 0.5,
    "MALE_GENITALIA_EXPOSED": 0.5,
}

specific_labels_covered = {
    "FEMALE_BREAST_COVERED": 0.4,
    "MALE_GENITALIA_COVERED": 0.4,
    "FEMALE_GENITALIA_COVERED": 0.4,
    "BUTTOCKS_COVERED": 0.4,
    "BELLY_COVERED": 0.4,
}

# Function to check for nudity in each frame
def is_specific_nude(results):
    try:
        for item in results:
            detected_class = item.get("class", "")
            confidence = item.get("score", 0)

            # Check if exposed class exceeds threshold
            if detected_class in specific_labels_exposed and confidence >= specific_labels_exposed[detected_class]:
                return detected_class  # Specific nudity detected as exposed

            # Check if covered class is below threshold
            if detected_class in specific_labels_covered and confidence < specific_labels_covered[detected_class]:
                return detected_class  # Specific nudity detected due to insufficient coverage

        return False  # No specific nudity detected
    except Exception as e:
        print(f"Error in specific nudity detection: {e}")
        return False  # Return False in case of error

# Process the video and detect nudity in each frame
def detect_nudity_in_video(video_path):
    try:
        cap = cv2.VideoCapture(video_path)
        if not cap.isOpened():
            print(f"Error: Unable to open video file {video_path}")
            return

        frame_count = 0
        video_nudity_detected = False

        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break  # Exit if the video ends

            frame_count += 1

            try:
                # Perform nudity detection on the current frame
                results = detector.detect(frame)  # Using frame directly instead of image path

                # Check if the frame contains specific nudity
                if is_specific_nude(results):
                    print(f"Nudity detected in frame {frame_count}")
                    video_nudity_detected = True
                    break  # Optionally, stop processing after finding nudity in one frame
            except Exception as e:
                print(f"Error processing frame {frame_count}: {e}")

        cap.release()

        # Output final decision
        if video_nudity_detected:
            print("Nudity detected in the video")
        else:
            print("No nudity detected in the video")

    except Exception as e:
        print(f"Error in video processing: {e}")

# Call the function to analyze the video
detect_nudity_in_video(video_path)