import mongoose from "mongoose";
const { Schema } = mongoose;

const stateCultureSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
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
    slug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("StateCulture", stateCultureSchema);
