import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import twilio from "twilio";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import authRoutes from "./routes/authRoutes.js";


// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// IPO Schema
const ipoSchema = new mongoose.Schema({
  companyName: String,
  openDate: String,
  closeDate: String,
  issueSize: String,
  issueType: String,
  listingDate: String,
  status: String,
  ipoPrice: String,
  listingPrice: String,
  listingGain: String,
  cmp: String,
  currentReturn: String,
  logoUrl: String, // Add logoUrl field to store the logo URL
});

const IPO = mongoose.model("IPO", ipoSchema);

// Configure multer for file uploads
const __filename = fileURLToPath(import.meta.url); // Get the current file path
const __dirname = path.dirname(__filename); // Get the current directory path

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads")); // Save files in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid conflicts
  },
});

const upload = multer({ storage });

// Create the "uploads" directory if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve static files (logos)
app.use("/uploads", express.static(uploadsDir));

// Routes
app.use("/api/auth", authRoutes);


// Fetch User Data
app.get("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all IPOs
app.get("/api/ipos", async (req, res) => {
  try {
    const ipos = await IPO.find();
    res.json(ipos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new IPO
app.post("/api/ipos", upload.single("logo"), async (req, res) => {
  try {
    const ipoData = req.body;
    if (req.file) {
      ipoData.logoUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`; // Add logo URL to IPO data
    }

    // Validate required fields
    if (
      !ipoData.companyName ||
      !ipoData.openDate ||
      !ipoData.closeDate ||
      !ipoData.issueSize ||
      !ipoData.issueType ||
      !ipoData.listingDate ||
      !ipoData.status ||
      !ipoData.ipoPrice ||
      !ipoData.listingPrice ||
      !ipoData.listingGain ||
      !ipoData.cmp ||
      !ipoData.currentReturn
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newIPO = new IPO(ipoData);
    await newIPO.save();
    res.status(201).json(newIPO);
  } catch (err) {
    console.error("Error saving IPO:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
});

// Update an IPO
app.put("/api/ipos/:id", upload.single("logo"), async (req, res) => {
  try {
    const { id } = req.params;
    const ipoData = req.body;

    if (req.file) {
      ipoData.logoUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`; // Update logo URL
    }

    const existingIPO = await IPO.findById(id);
    if (!existingIPO) {
      return res.status(404).json({ message: "IPO not found" });
    }

    const updatedIPO = await IPO.findByIdAndUpdate(id, ipoData, { new: true });
    res.json(updatedIPO);
  } catch (err) {
    console.error("Error updating IPO:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
});

// Delete an IPO
app.delete("/api/ipos/:id", async (req, res) => {
  try {
    const deletedIPO = await IPO.findByIdAndDelete(req.params.id);
    if (!deletedIPO) {
      return res.status(404).json({ message: "IPO not found" });
    }
    res.json({ message: "IPO Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all quick links
app.get("/api/quicklinks", async (req, res) => {
  try {
    const quickLinks = await QuickLink.find();
    res.json(quickLinks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Twilio Configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const client = twilio(accountSid, authToken);

// Send SMS
app.post("/api/send-sms", async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(400).json({ message: "Phone number is required" });
    }
    const message = await client.messages.create({
      body: "🚀 Tap here to download BLUESTOCK and take control of the stock market today! 📈📊 [Download Link]",
      messagingServiceSid: messagingServiceSid,
      to: phoneNumber,
    });
    res.json({ success: true, message: "SMS sent successfully!", sid: message.sid });
  } catch (error) {
    console.error("Twilio Error:", error);
    res.status(500).json({ success: false, message: "Failed to send SMS", error: error.message });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));