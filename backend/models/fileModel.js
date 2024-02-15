const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    originalName: String,
    mimeType: String,
    size: Number,
    data: Buffer,
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);

