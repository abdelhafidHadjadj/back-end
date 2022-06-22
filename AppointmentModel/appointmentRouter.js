const express = require("express");
const { requireAuth } = require("../authentification/auth");
const router = express.Router();
const {
  AddAppointmentHandler,
  GetAppointmentHandler,
  DeleteAppointmentHandler,
  UpdateAppointmentHandler,
} = require("./appointmentServices");

router.get("/getAppointments", GetAppointmentHandler);
router.post("/addAppointments", AddAppointmentHandler);
router.put("/updateAppointments/:appointId", UpdateAppointmentHandler);
router.delete("/deleteAppointments/:appointId", DeleteAppointmentHandler);

module.exports = router;
