import mongoose from "mongoose";
const { Schema } = mongoose;

const contentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const religionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    introduction: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      url: {
        type: String,
        required: true,
      },
    },
    overview: {
      type: String,
      trim: true,
      required: true,
    },
    history: {
      type: String,
      trim: true,
      required: true,
    },
    regions: {
      type: String,
      trim: true,
      required: true,
    },
    practices: {
      type: String,
      trim: true,
      required: true,
    },
    core_beliefs: [contentSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Religion", religionSchema);
