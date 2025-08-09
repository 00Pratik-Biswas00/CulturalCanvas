import mongoose from "mongoose";
import cloudinary from "cloudinary";
import AWS from "aws-sdk";
import nodemailer from "nodemailer";
import redis from "redis";
import "dotenv/config";

export const redisClient = redis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST
);

const connect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("Database connected successfully.");
      })
      .catch((error) => {
        console.log("Error connecting to database: " + JSON.stringify(error));
        process.exit(1);
      });

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    // redisClient.on("error", (error) => {
    //   console.error("Redis connection error:", error);
    //   process.exit(1);
    // });

    // redisClient.on("ready", () => {
    //   console.log("Redis connection ready.");
    // });

    // await redisClient.connect();
    // console.log("Redis connection successful.");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

export const S3 = new AWS.S3(awsConfig);
export var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});
export default connect;
