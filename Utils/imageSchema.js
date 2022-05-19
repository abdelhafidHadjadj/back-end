const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  imageUrl: String,
});

const Image = mongoose.model("image", ImageSchema);

module.exports = Image;
