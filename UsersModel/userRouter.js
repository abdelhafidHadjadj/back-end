const express = require("express");
const router = express.Router();
const {
  registerHandler,
  getAllUsersHandler,
  getAllAdminsHandler,
  loginHandler,
  UpdateUserHandler,
  getAllUsersAdminsHandler,
} = require("./userServices");
const { requireAuth } = require("../authentification/auth");
const { requireAuthAdmin } = require("../authentification/authAdmin");
const { parser } = require("../Utils/cloudinary");

router.post("/register", registerHandler);
router.post("/login", loginHandler);
router.post("/Admin", loginHandler);
router.get("/getUsers", getAllUsersHandler);
router.get("/getAllAdmins", getAllAdminsHandler);
router.get("/getAllAdminsUsers", getAllUsersAdminsHandler);
router.put(
  "/updateAdminInfo/:userId",
  parser.array("avatar"),
  UpdateUserHandler
);
router.get("/getProfile", requireAuth);

module.exports = router;
