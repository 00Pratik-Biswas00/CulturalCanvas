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
    type: String,
    required: true,
  }
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
        "English",
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
        "None",
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
        "None",
      ],
    },
    arts: {
      type: String,
      enum: [
        "Dance",
        "Music",
        "Theatre",
        "Puppetry",
        "None",
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
        "None",
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
  instructorName: {
    type: String,
    required: true,
  },
  instructorEmail: {
    type: String,
    required: true,
  },
  instructorImage: {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
  },
  modules: [moduleSchema],
  averageRatings: {
    type: Number,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Course", courseSchema);