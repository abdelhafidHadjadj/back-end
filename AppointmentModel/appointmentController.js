const Appointment = require("./appointmentSchema");

function AddAppointment(appoint) {
  return Appointment.create(appoint);
}

function GetAppointments() {
  return Appointment.find()
    .populate("employeeId", "username")
    .populate("clientId", "username");
}

function DeleteAppointment(appointId) {
  return Appointment.findByIdAndDelete({ _id: appointId });
}
function UpdateAppointment(appointId, detaills) {
  return Appointment.findByIdAndUpdate({ _id: appointId }, detaills);
}

module.exports = {
  AddAppointment,
  GetAppointments,
  DeleteAppointment,
  UpdateAppointment,
};
