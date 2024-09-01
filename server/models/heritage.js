import mongoose from "mongoose";
const { Schema } = mongoose;

const descriptionSchema = new Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
});

const heritageSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      url: String,
      public_id: String,
    },
    introduction: {
      type: String,
      required: true,
    },
    endlessDigitalArt: {},
    animatedVideo: {},
    vlogVideo: {},
    part1: [descriptionSchema],
    part2: [descriptionSchema],
    type_of_heritage: {
      type: String,
      enum: ["unesco_listed", "unesco_unlisted", "local_heritage"],
    },
    tag: {
      type: String,
      enum: ["cultural", "natural", "tangible", "intangible"],
    },
    police_helpline: {
      type: String,
      trim: true,
      required: true,
    },
    women_helpline: {
      type: String,
      trim: true,
      required: true,
    },
    child_helpline: {
      type: String,
      trim: true,
      required: true,
    },
    fire_emergency: {
      type: String,
      trim: true,
      required: true,
    },
    medical_emergency: {
      type: String,
      trim: true,
      required: true,
    },
    state_culture_name: {
      type: String,
      trim: true,
      required: true,
    },
    state_culture_link: [
      {
        type: Schema.Types.ObjectId,
        ref: "Culture",
      },
    ],
    entry_fee: {
      type: Number,
      required: True,
      default: 0,
    },
    nearest_attraction: [
      {
        type: Schema.Types.ObjectId,
        ref: "Heritage",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Heritage", heritageSchema);
