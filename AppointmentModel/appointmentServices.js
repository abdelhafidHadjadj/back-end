const appointmentController = require("./appointmentController");

function AddAppointmentHandler(req, res) {
  const appoint = req.body;
  appointmentController
    .AddAppointment(appoint)
    .then((data) => {
      res.send(data);
      res.status(201);
      console.log("Appointment added");
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: err });
    });
}

function GetAppointmentHandler(req, res) {
  appointmentController
    .GetAppointments()
    .then((data) => {
      res.send(data);
      res.status(200);
      console.log("Get Appointments");
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found :(" });
    });
}
function DeleteAppointmentHandler(req, res) {
  const { appointId } = req.params;
  appointmentController
    .DeleteAppointment(appointId)
    .then((data) => {
      res.send(data);
      res.status(201);
      console.log("Appointment deleted");
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found :(" });
    });
}

function UpdateAppointmentHandler(req, res) {
  const { appointId } = req.params;
  const detaills = req.body;
  appointmentController
    .UpdateAppointment(appointId, detaills)
    .then((data) => {
      res.send(data);
      res.status(201);
      console.log("Appointment updated");
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found :(" });
    });
}

module.exports = {
  AddAppointmentHandler,
  GetAppointmentHandler,
  DeleteAppointmentHandler,
  UpdateAppointmentHandler,
};
