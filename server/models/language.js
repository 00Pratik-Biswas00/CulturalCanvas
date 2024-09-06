import mongoose from "mongoose";
const { Schema } = mongoose;

const contentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const languageSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
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
    content: [contentSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Language", languageSchema);
