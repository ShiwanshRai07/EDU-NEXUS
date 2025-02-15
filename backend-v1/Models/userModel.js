import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
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
  "Cloud Computing",
];

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skillLinks: { type: String }, // Portfolio, GitHub, Certifications
  skills: { type: [String], enum: skillEnum, required: true }, // Skills must be from skillEnum
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  console.log(this.username);
try {
    const salt = await bcrypt.genSalt(12); // 12 rounds of salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  
} catch (error) {
  console.log("error in userModel")
  next(error);
}});
const User = mongoose.model("User", userSchema);

export default User;
