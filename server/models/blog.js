 import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false },
  { timestamps: true }
);

const blogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    verified: { type: Boolean, default: false },
    image: { url: String, public_id: String },
    video: {
      ETag: String,
      ServerSideEncryption: String,
      Location: String,
      Key: String,
      Bucket: String,
    },
    contentCategory: {
      type: String,
      enum: ["Culture", "Heritage"],
      required: true,
    },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    state: { type: String, required: true },
    city: { type: String, required: true },
    originLocation: { type: String, required: true },
    contentType: { type: String, enum: ["Blog", "Vlog"], required: true },
    comments: [commentSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
