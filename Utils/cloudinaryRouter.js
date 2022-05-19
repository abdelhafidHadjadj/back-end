const express = require("express");
const router = express.Router();
const { parser } = require("./cloudinary");
const {
  getImagesHandler,
  uploadImagesHandler,
} = require("./cloudinaryServices");
router.get("/getImages", getImagesHandler);
router.post("/UploadImages", parser.single("image"), uploadImagesHandler);

module.exports = router;
