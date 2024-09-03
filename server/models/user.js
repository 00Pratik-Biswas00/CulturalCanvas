import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 64,
    },
    photo: {
      url: String,
      public_id: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Non-Binary", "Other"],
    },
    role: {
      type: String,
      enum: ["user", "admin", "moderator"],
      default: "user",
    },
    phone: {
      type: String,
      trim: true,
    },
    rewards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reward",
      },
    ],
    vlogs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Vlog",
      },
    ],
    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
    otp: {
      type: String,
    },
    otpExpiry: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
