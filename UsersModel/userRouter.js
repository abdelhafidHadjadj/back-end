const express = require("express");
const router = express.Router();
const {
  registerHandler,
  getAllUsersHandler,
  loginHandler,
} = require("./userServices");
const { requireAuth } = require("../authentification/auth");
const { requireAuthAdmin } = require("../authentification/authAdmin");

router.post("/register", registerHandler);
router.post("/login", loginHandler);
router.post("/Admin", requireAuth, requireAuthAdmin, loginHandler);
router.get(
  "/Admin/getUsers",
  requireAuth,
  requireAuthAdmin,
  getAllUsersHandler
);

module.exports = router;
