const express = require("express");
const router = express.Router();
const {
  AddPropertyHandler,
  GetAllPropertiesHandler,
  GetPropertyHandler,
  DeletePropertyHandler,
  UpdatePropertyHandler,
  UpdatePropertyAvailable,
} = require("./estateServices");
const { requireAuth } = require("../authentification/auth");
const { requireAuthAdmin } = require("../authentification/authAdmin");
const { parser } = require("../Utils/cloudinary");

router.post(
  "/add-Property",
  parser.array("image"),
  AddPropertyHandler,
  requireAuthAdmin
);
router.get("/allProperties", GetAllPropertiesHandler);
router.get("/allProperties/:propertyId", GetPropertyHandler);
router.delete("/delete-Property/:propertyId", DeletePropertyHandler);
router.put(
  "/update/:propertyId",

  parser.array("image"),
  UpdatePropertyHandler
);
router.put(
  "/updateAvailable/:propertyId",
  requireAuthAdmin,
  UpdatePropertyAvailable
);
module.exports = router;
