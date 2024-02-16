const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  originalName: String,
  mimeType: String,
  size: Number,
  data: Buffer,
  version: { type: Number, default: 1 }, 
}, { timestamps: true });

module.exports = mongoose.model("File", fileSchema);


