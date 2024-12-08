import mongoose from "mongoose";

const ContestSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  week: { type: Number, required: true },
});

const WinnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  socialMediaLink: { type: String, required: true },
  rank: { type: Number, required: true, min: 1, max: 3 },
  week: { type: Number, required: true },
});

export const Winner = mongoose.model("Winner", WinnerSchema);
export const Contest = mongoose.model("Contest", ContestSchema);
