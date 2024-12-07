import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  gender: String,
  dob: String,
  address: String,
  education: String,
  workExperience: String,
  skills: [String],
  languages: String,
  portfolio: { url: String, public_id: String },
});

const teacherSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  dob: String,
  address: String,
  education: String,
  workExperience: String,
  skills: [String],
  domainOfTeaching: String,
  portfolio: { url: String, public_id: String },
});

export const Admin = mongoose.model("Admin", adminSchema);
export const Teacher = mongoose.model("Teacher", teacherSchema);
