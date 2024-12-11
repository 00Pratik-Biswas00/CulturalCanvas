import mongoose from "mongoose";

const { Schema } = mongoose;

const sellerSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    gender: {
      type: String,
      enum: ["Male", "Female", "Non-Binary", "Other"],
    },
    verified: { type: Boolean, default: false },
    image: { url: String, public_id: String },
    address: { type: String, required: true },
    shopAddress: {
      type: String,
      required: true,
    },
    biography: {
      type: String,
      required: true,
    },
    background: {
      ETag: String,
      ServerSideEncryption: String,
      Location: String,
      Key: String,
      Bucket: String,
    },
    itCertificate: { url: String, public_id: String },
    idProof: { url: String, public_id: String },
    category: {
      type: String,
      enum: ["Clothing", "Handicrafts"],
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Seller", sellerSchema);
