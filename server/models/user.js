import mongoose from "mongoose";
const { Schema } = mongoose;

const badgeEnum = [
  "TopVoice",
  "TopSeller",
  "CustomerChoice",
  "CommunityBuilder",
  "EcoFriendly",
  "Innovator",
  "StarReviewer",
];

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
      enum: ["user", "admin", "owner", "seller"],
      default: "user",
    },
    phone: {
      type: String,
      trim: true,
    },
    rewards: [
      {
        badge: {
          type: String,
          enum: badgeEnum,
          required: true,
        },
        awardedAt: {
          type: Date,
          default: Date.now,
        },
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
