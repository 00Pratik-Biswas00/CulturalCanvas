from nudenet import NudeDetector

# Initialize the NudeDetector
detector = NudeDetector()

# Path to the image to be analyzed
image_path = "./xxx.jpeg"

# Perform nudity detection
try:
    results = detector.detect(image_path)
    print(results)
except Exception as e:
    print(f"Error during nudity detection: {e}")
    results = []  # Ensure that 'results' is initialized as an empty list in case of an error

# Check if the image contains specific nudity
def is_specific_nude(results):
    try:
        # Define explicit labels to look for exposed and covered criteria
        specific_labels_exposed = {
            "BUTTOCKS_EXPOSED": 0.6,
            "FEMALE_BREAST_EXPOSED": 0.6,
            "FEMALE_GENITALIA_EXPOSED": 0.3,
            "MALE_BREAST_EXPOSED": 0.5,
            "ANUS_EXPOSED": 0.3,
            "BELLY_EXPOSED": 0.7,
            "MALE_GENITALIA_EXPOSED": 0.3,
        }

        specific_labels_covered = {
            "FEMALE_BREAST_COVERED": 0.3,
            "MALE_GENITALIA_COVERED": 0.6,
            "FEMALE_GENITALIA_COVERED": 0.7,
            "BUTTOCKS_COVERED": 0.4,
            "BELLY_COVERED": 0.3,
        }

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
        print(f"Error during nudity classification: {e}")
        return False  # In case of an error, return False

# Output decision
try:
    detect_nudity = is_specific_nude(results)
    if detect_nudity:
        print("Specific nudity detected")
        print(detect_nudity)
    else:
        print("No specific nudity detected")
except Exception as e:
    print(f"Error in decision output: {e}")