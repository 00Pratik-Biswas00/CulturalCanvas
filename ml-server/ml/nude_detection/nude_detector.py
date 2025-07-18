import os
import math
import cv2
import numpy as np
import onnxruntime
from onnxruntime.capi import _pybind_state as C
import sys
from .utils import get_labels, get_nude_labels

class NudeDetector:
    # Load the general and nude-specific class labels from external utility functions
    __labels = get_labels()
    __nude_labels = get_nude_labels()

    def __init__(self, image=None, providers=None):
        # Initialize the detector with an image and ONNX runtime session
        self.image = image
        self.onnx_session = onnxruntime.InferenceSession(
            os.path.join(os.path.dirname(__file__), "best.onnx"),
            providers=C.get_available_providers() if not providers else providers,
        )
        
        # Set the input shape based on the ONNX model
        model_inputs = self.onnx_session.get_inputs()
        input_shape = model_inputs[0].shape
        self.input_width = input_shape[2]  # 320
        self.input_height = input_shape[3]  # 320
        self.input_name = model_inputs[0].name
        
        # If an image is provided, run detection on it
        if image is not None:
            self.detections = self.detect()

    def set_image(self, image):
        # Allow setting or updating the image for detection
        self.image = image
        self.detections = self.detect()

    def process_image(self, target_size=320):
        # Preprocess the image for the ONNX model input
        img = self.image
        img_height, img_width = img.shape[:2]
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # Convert image to RGB
        
        # Resize the image while maintaining the aspect ratio
        aspect = img_width / img_height
        if img_height > img_width:
            new_height = target_size
            new_width = int(round(target_size * aspect))
        else:
            new_width = target_size
            new_height = int(round(target_size / aspect))
        
        resize_factor = math.sqrt(
            (img_width ** 2 + img_height ** 2) / (new_width ** 2 + new_height ** 2)
        )
        
        # Resize and pad the image to target size
        img = cv2.resize(img, (new_width, new_height))
        pad_x = target_size - new_width
        pad_y = target_size - new_height
        pad_top, pad_bottom = [int(i) for i in np.floor([pad_y, pad_y]) / 2]
        pad_left, pad_right = [int(i) for i in np.floor([pad_x, pad_x]) / 2]
        img = cv2.copyMakeBorder(
            img,
            pad_top,
            pad_bottom,
            pad_left,
            pad_right,
            cv2.BORDER_CONSTANT,
            value=[0, 0, 0],  # Black padding
        )
        
        # Normalize and prepare the image for the model
        img = cv2.resize(img, (target_size, target_size))
        image_data = img.astype("float32") / 255.0  # Normalize to [0, 1]
        image_data = np.transpose(image_data, (2, 0, 1))  # Change shape to (C, H, W)
        image_data = np.expand_dims(image_data, axis=0)  # Add batch dimension
        return image_data, resize_factor, pad_left, pad_top

    def process_detections(self, output, resize_factor, pad_left, pad_top):
        # Process model output and extract bounding boxes and class labels
        outputs = np.transpose(np.squeeze(output[0]))
        rows = outputs.shape[0]
        boxes = []
        scores = []
        class_ids = []
        
        for i in range(rows):
            classes_scores = outputs[i][4:]  # Extract class scores
            max_score = np.amax(classes_scores)
            
            # Only consider detections with score above the threshold (0.2)
            if max_score >= 0.2:
                class_id = np.argmax(classes_scores)
                x, y, w, h = outputs[i][0], outputs[i][1], outputs[i][2], outputs[i][3]
                
                # Adjust bounding box coordinates based on padding and resize factor
                left = int(round((x - w * 0.5 - pad_left) * resize_factor))
                top = int(round((y - h * 0.5 - pad_top) * resize_factor))
                width = int(round(w * resize_factor))
                height = int(round(h * resize_factor))
                
                class_ids.append(class_id)
                scores.append(max_score)
                boxes.append([left, top, width, height])
        
        # Perform non-maximum suppression to remove redundant detections
        indices = cv2.dnn.NMSBoxes(boxes, scores, 0.25, 0.45)
        detections = []
        for i in indices:
            box = boxes[i]
            score = scores[i]
            class_id = class_ids[i]
            detections.append(
                {"class": self.__labels[class_id], "score": float(score), "box": box}
            )
        return detections

    def detect(self):
        # Run object detection on the current image
        if self.image is None:
            print("Error: Please provide an image either during initialization NudeDetector or by using the set_image method after initializing.")
            sys.exit(1)
        
        # Preprocess the image and run the model
        preprocessed_image, resize_factor, pad_left, pad_top = self.process_image(self.input_width)
        outputs = self.onnx_session.run(None, {self.input_name: preprocessed_image})
        
        # Process the model's output and return detections
        detections = self.process_detections(outputs, resize_factor, pad_left, pad_top)
        return detections

    def visualize(self, parmanent=False, classes=None):
        # Visualize detection results on the image
        if classes is None:
            classes = self.__nude_labels  # Default to nude-related classes
        detections = self.detections
        
        # Filter detections based on class labels
        if classes:
            detections = [detection for detection in detections if detection["class"] in classes]
        
        # Either modify the original image or make a copy
        if parmanent:
            img = self.image
        else:
            img = self.image.copy()
        
        # Draw bounding boxes and labels on the image
        for detection in detections:
            box = detection["box"]
            x, y, w, h = box[0], box[1], box[2], box[3]
            cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
            label = f"{detection['class']} ({round(detection['score'], 2)})"
            cv2.putText(img, label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
        return img

    def blur_nudity(self, parmanent=False, nude_classes=None):
        # Apply blur to areas containing nudity based on class labels
        if nude_classes is None:
            nude_classes = self.__nude_labels  # Default to nude-related classes
        detections = self.detections
        
        # Either modify the original image or make a copy
        if parmanent:
            img = self.image
        else:
            img = self.image.copy()
        
        # Blur detected nude areas
        for detection in detections:
            if detection["class"] in nude_classes:
                box = detection["box"]
                x, y, w, h = box[0], box[1], box[2], box[3]
                blurred_area = img[y:y + h, x:x + w]
                blurred_area = cv2.GaussianBlur(blurred_area, (75, 75), 100)
                img[y:y + h, x:x + w] = blurred_area
        return img

    def is_nude(self, nude_classes=None, threshold=0.7):
        # Check if any detected object is classified as "nude" based on the threshold
        if nude_classes is None:
            nude_classes = self.__nude_labels
        detections = self.detections
        is_nude = False
        
        # If any detection is considered nude and has a score above the threshold, return True
        for detection in detections:
            if detection["class"] in nude_classes and detection["score"] >= threshold:
                is_nude = True
        return is_nude
