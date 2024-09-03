import express from "express";
import formidable from "express-formidable";
import cloudinary from "cloudinary";
import "dotenv/config";
import AWS from "aws-sdk";
import { nanoid } from "nanoid";
import { readFileSync } from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const router = express.Router();

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

const S3 = new AWS.S3(awsConfig);

router.post(
  "/upload-image",
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.files.image.path);
      res.json({
        url: result.secure_url,
        public_id: result.public_id,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to upload image" });
    }
  }
);

router.post("/remove-image", async (req, res) => {
  const { image } = req.body;
  const deletePhoto = (publicId) => {
    return new Promise((resolve) => {
      cloudinary.uploader.destroy(publicId, (result) => {
        resolve(result);
      });
    });
  };
  const photoPublicId = image.public_id;
  try {
    await deletePhoto(photoPublicId);
    res.status(200).json({ status: true });
  } catch (error) {
    console.error("Error deleting photo:", error);
    res.status(500).json({ error: "Error deleting photo" });
  }
});

router.post("/video-upload", formidable(), async (req, res) => {
  try {
    const { video } = req.files;
    if (!video) return res.status(404).send("No Video found!");

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${nanoid()}.${video.type.split("/")[1]}`,
      Body: readFileSync(video.path),
      ACL: "public-read",
      ContentType: video.type,
    };
    S3.upload(params, (err, data) => {
      if (err) {
        console.error(err);
        res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });
  } catch (err) {
    console.error(err);
  }
});

router.post("/video-remove", async (req, res) => {
  try {
    if (req.userId != req.params.id) {
      return res.status(400).send("Unauthorized");
    }
    const { Bucket, Key } = req.body;

    const params = {
      Bucket,
      Key,
    };

    S3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      console.log(data);
      res.send({ ok: true });
    });
  } catch (err) {
    console.log(err);
  }
});

export default router;
