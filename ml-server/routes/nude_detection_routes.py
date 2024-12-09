from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
import os
import cv2
import tempfile
from ml.nude_detection.nude_detector import NudeDetector

nude_detection_routes = Blueprint('nude_detection', __name__)

UPLOAD_FOLDER = 'ml/nude_detection/uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@nude_detection_routes.route('/api/detect-nudity/image', methods=['POST'])
def detect_image():
    file = request.files.get('file')
    if not file:
        return jsonify({"error": "No file uploaded"}), 400

    # Save the file temporarily
    filename = secure_filename(file.filename)
    temp_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(temp_path)

    # Load the image and detect nudity
    image = cv2.imread(temp_path)
    detector = NudeDetector(image)
    nudity_detected = detector.is_nude()

    # Create the response
    response = {
        "nudity_detected": nudity_detected,
        "detections": detector.detections
    }

    # Remove the temporary file
    os.remove(temp_path)

    return jsonify(response)


@nude_detection_routes.route('/api/detect-nudity/video', methods=['POST'])
def detect_video():
    """
    Detect nudity in a video file.
    """
    file = request.files.get('file')
    if not file:
        return jsonify({"error": "No file uploaded"}), 400

    # Create a temporary file in-memory
    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as temp_file:
        temp_file.write(file.read())
        temp_path = temp_file.name

    skip_interval = 20
    frame_index = 0
    nude_frames = []

    cap = cv2.VideoCapture(temp_path)
    try:
        while True:
            success, img = cap.read()
            if not success:
                break
            if frame_index % skip_interval == 0:
                detector = NudeDetector(img)
                if detector.is_nude():
                    nude_frames.append(frame_index)
            frame_index += 1
    finally:
        cap.release()  # This is essential to release the video file


    # Safely remove the temporary file
    try:
        os.remove(temp_path)
    except Exception as e:
        print(f"Error removing file: {e}")

    return jsonify({
        "nudity_detected": bool(nude_frames),
        "nude_frames": nude_frames
    })
    
    
    