import express from "express";
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); 

const router = express.Router();

const generateUsername = (name) => {
  return name.toLowerCase().replace(/\s+/g, "") + Math.floor(Math.random() * 1000);
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Signup section
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, username } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    let finalUsername = username || generateUsername(name);

    let existingUser = await User.findOne({ username: finalUsername });
    while (existingUser) {
      finalUsername = generateUsername(name); 
      existingUser = await User.findOne({ username: finalUsername });
    }

    const newUser = new User({
      name,
      email,
      password,
      username: finalUsername, 
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


// User Login section
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    user.lastLogin = new Date();
    await user.save();

    res.json({
      id: user._id,
      email: user.email,
      password: user.password, 
      name: user.name,
      isVerified: user.isVerified,
      lastLogin: user.lastLogin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      __v: user.__v,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};




// forgot password section
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // Token valid for 15 min
    await user.save();

    const resetLink = `http://localhost:5173/reset-password?token=${resetToken}`;
    console.log(`Password reset link: ${resetLink}`);

    res.json({ message: "Password reset link sent to email", resetLink });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


// Set up routes correctly
router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);

export default router;
