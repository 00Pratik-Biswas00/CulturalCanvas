import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    image: {
      url: String,
      public_id: String,
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
    state: {
      type: String, 
      required: true,
    },
    city: {
      type: String, 
      required: true,
    },
    originLocation: {
      type: String, 
      required: true,
    },
    contentType: {
      type: String, 
      enum: ["blog", "vlog"], 
      required: true,
    },
    tags: [String], 
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
