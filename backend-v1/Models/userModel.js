import mongoose from "mongoose";

const skillEnum = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Machine Learning",
  "Web Development",
  "Data Science",
  "Cybersecurity",
  "Blockchain",
  "Cloud Computing"
];

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skillLinks: { type: String }, // Portfolio, GitHub, Certifications
  skills: { type: [String], enum: skillEnum, required: true }, // Skills must be from skillEnum
});

const User = mongoose.model("User", userSchema);

export default User;
