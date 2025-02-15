import express from "express";
import User from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import authenticateToken from "../utils/authUtils.js";
const authRouter = express.Router();

// Register User
authRouter.post("/register", async (req, res) => {
  try {
    const { username, email, password, skillLinks, skills } = req.body;
		// check is  skill set enum matches the inbuilts
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ username, email, password, skillLinks, skills });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error line in register" });
  }
});

// Login User
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    // sigin in with user._id
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_TOKEN, {
      expiresIn: "24h",
    });

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        skills: user.skills,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

authRouter.get("/profile", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password"); // select without password
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default authRouter;
