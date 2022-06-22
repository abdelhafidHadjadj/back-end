const express = require("express");
const router = express.Router();
const { parser } = require("./cloudinary");
const { getImagesHandler } = require("./cloudinaryServices");
// router.get("/getImages", getImagesHandler);

module.exports = router;
