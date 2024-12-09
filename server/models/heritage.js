import mongoose from "mongoose";
const { Schema } = mongoose;

const descriptionSchema = new Schema({
  heading: { type: String },
  description: { type: String },
});

const heritageSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    introduction: {
      type: String,
      required: true,
    },
    endlessDigitalArt: {
      ETag: {
        type: String,
      },
      ServerSideEncryption: {
        type: String,
      },
      Location: {
        type: String,
      },
      Key: {
        type: String,
      },
      Bucket: {
        type: String,
      },
    },
    animatedVideo: {
      ETag: {
        type: String,
      },
      ServerSideEncryption: {
        type: String,
      },
      Location: {
        type: String,
      },
      Key: {
        type: String,
      },
      Bucket: {
        type: String,
      },
    },
    vlogVideo: {
      ETag: {
        type: String,
      },
      ServerSideEncryption: {
        type: String,
      },
      Location: {
        type: String,
      },
      Key: {
        type: String,
      },
      Bucket: {
        type: String,
      },
    },
    part1: [descriptionSchema],
    type_of_heritage: {
      type: String,
      enum: ["unesco_listed", "unesco_unlisted", "local_heritage"],
    },
    tag: {
      type: String,
      enum: ["cultural", "natural", "tangible", "intangible"],
    },
    state_culture_name: {
      type: String,
      trim: true,
      required: true,
    },
    nearest_attractions: [
      {
        heritage: {
          type: Schema.Types.ObjectId,
          ref: "Heritage",
        },
        distance: {
          type: Number, // Distance in kilometers or miles
        },
        entry_fee: {
          type: Number, // Entry fee in currency
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Heritage", heritageSchema);
