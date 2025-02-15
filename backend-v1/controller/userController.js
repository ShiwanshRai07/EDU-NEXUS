import bcrypt from "bcryptjs";
import User from "../Models/userModel.js";

/**
 * Register a new user
 */
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, skillLinks, skills } = req.body;

    // Check for missing fields
    if (!username || !email || !password || !skills || skills.length === 0) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      skillLinks,
      skills,
    });
    await newUser.save();
		console.log(newUser);
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
