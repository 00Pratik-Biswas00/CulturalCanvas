import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
  location: { type: String, required: true },
  totalDays: { type: Number, required: true },
  budget: { type: String, required: true },
  traveler: { type: String, required: true },
  plan: { type: Object, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Trip", tripSchema);
