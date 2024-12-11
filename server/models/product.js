import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    reviewer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    review: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    uniqueFeature: { type: String, required: true },
    materialDetails: [
      {
        name: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    image: { url: String, public_id: String },
    video: {
      ETag: String,
      ServerSideEncryption: String,
      Location: String,
      Key: String,
      Bucket: String,
    },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Clothing", "Handicrafts"],
    },
    quantity: { type: Number, required: true },
    seller: { type: Schema.Types.ObjectId, ref: "Seller", required: true },
    certification: { url: String, public_id: String },
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
