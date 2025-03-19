import mongoose from "mongoose";

const quickLinkSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  logoUrl: { type: String, required: true },
});

const QuickLink = mongoose.model("QuickLink", quickLinkSchema);
export default QuickLink;