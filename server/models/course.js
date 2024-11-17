import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
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
  description: {
    type: String,
    required: true,
  },
  video: {
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
});

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
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
  courseCategory: {
    language: {
      type: String,
      enum: [
        "Assamese",
        "Bengali",
        "Bodo",
        "Dogri",
        "Gujarati",
        "Hindi",
        "Kashmiri",
        "Kannada",
        "Konkani",
        "Maithili",
        "Malayalam",
        "Manipuri",
        "Marathi",
        "Nepali",
        "Odia",
        "Punjabi",
        "Sanskrit",
        "Santali",
        "Sindhi",
        "Tamil",
        "Telugu",
        "Urdu",
      ],
    },
    cuisine: {
      type: String,
      enum: [
        "Bengali",
        "Punjabi",
        "Kashmiri",
        "Rajasthani",
        "Gujarati",
        "Maharashtrian",
        "Goan",
        "Tamil Nadu",
        "Kerala",
        "Andhra Pradesh",
        "Telangana",
        "Karnataka",
        "Uttar Pradesh",
        "Assamese",
        "Odia",
        "Manipuri",
        "Naga",
        "Mizo",
        "Meghalayan",
        "Sikkimese",
        "Tripuri",
        "Himachali",
        "Haryanvi",
        "Madhya Pradesh",
        "Chhattisgarhi",
        "Bihari",
        "Jharkhand",
        "Ladakhi",
        "Uttarakhand",
        "Pahari",
        "Sindhi",
        "Parsi",
        "Anglo-Indian",
      ],
    },
    arts: {
      type: String,
      enum: [
        "Dance",
        "Music",
        "Theatre",
        "Puppetry",
        // Add other arts forms as needed
      ],
    },
    sports: {
      type: String,
      enum: [
        "Cricket",
        "Hockey",
        "Football",
        "Kabaddi",
        "Kabaddi",
        "Kho Kho",
        // Add other sports as needed
      ],
    },
  },
  courseHistory: {
    type: String,
    required: true,
  },
  courseIntro: {
    type: String,
    required: true,
  },
  modules: [moduleSchema],
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Course", courseSchema);
