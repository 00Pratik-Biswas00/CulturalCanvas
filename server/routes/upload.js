import express from "express";
import formidable from "express-formidable";

import { removeImage, uploadImage } from "../controllers/upload.js";

const router = express.Router();

router.post(
  "/upload-image",
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  uploadImage
);

router.post("/remove-image", removeImage);

export default router;
