import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  video: {
    ETag: {
      type: String,
      required: true,
    },
    ServerSideEncryption: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
    Key: {
      type: String,
      required: true,
    },
    Bucket: {
      type: String,
      required: true,
    },
  },
});

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  image: {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
  },
  courseCategory: {
    type: String,
    required: true,
  },
  courseHistory: {
    type: String,
    enum: ["Language", "Cuisine", "Clothing", "Art&Culture"],
    required: true,
  },
  courseIntro: {
    type: String,
    required: true,
  },
  modules: [moduleSchema],
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Course", courseSchema);
