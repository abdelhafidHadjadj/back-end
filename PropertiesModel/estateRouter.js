const express = require("express");
const router = express.Router();
const {
  AddPropertyHandler,
  GetAllPropertiesHandler,
  DeletePropertyHandler,
  UpdatePropertyHandler,
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
router.delete(
  "/delete-Property/:propertyId",
  requireAuthAdmin,
  DeletePropertyHandler
);
router.put("/update/:propertyId", requireAuthAdmin, UpdatePropertyHandler);

module.exports = router;
