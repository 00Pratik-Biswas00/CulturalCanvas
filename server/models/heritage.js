import mongoose from "mongoose";
const { Schema } = mongoose;

const descriptionSchema = new Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
});

const heritageTypeSchema = new Schema({
  type: {
    type: String,
    enum: ["unesco_listed", "unesco_unlisted", "local_heritage"],
  },
  image: {
    url: String,
    public_id: String,
  },
});

const stateSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    url: String,
    public_id: String,
  },
});

const heritageSchema = new Schema(
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
    introduction: {
      type: String,
      required: true,
    },
    endlessDigitalArt: {
      ETag: {
        type: String,
        required: true,
      },
      ServerSideEncryption: {
        type: String,
        required: true,
      },
      Location: {
        type: String,
        required: true,
      },
      Key: {
        type: String,
        required: true,
      },
      Bucket: {
        type: String,
        required: true,
      },
    },
    animatedVideo: {
      ETag: {
        type: String,
        required: true,
      },
      ServerSideEncryption: {
        type: String,
        required: true,
      },
      Location: {
        type: String,
        required: true,
      },
      Key: {
        type: String,
        required: true,
      },
      Bucket: {
        type: String,
        required: true,
      },
    },
    vlogVideo: {
      ETag: {
        type: String,
        required: true,
      },
      ServerSideEncryption: {
        type: String,
        required: true,
      },
      Location: {
        type: String,
        required: true,
      },
      Key: {
        type: String,
        required: true,
      },
      Bucket: {
        type: String,
        required: true,
      },
    },
    part1: [descriptionSchema],
    part2: [descriptionSchema],
    type_of_heritage: heritageTypeSchema,
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
    state_culture_name: stateSchema,
    state_culture_link: [
      {
        type: Schema.Types.ObjectId,
        ref: "Culture",
      },
    ],
    entry_fee: {
      type: Number,
      required: true,
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
