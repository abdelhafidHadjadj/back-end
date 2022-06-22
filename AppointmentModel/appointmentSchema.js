const mongoose = require("mongoose");
const { Schema } = mongoose;

const AppointmentSchema = new mongoose.Schema({
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  propertyId: mongoose.Types.ObjectId,

  dateApt: String,
  hourApt: String,
  postedAt: {
    type: Date,
    default: Date.now,
  },
  confirmApt: {
    type: Boolean,
    default: false,
  },
});

AppointmentSchema.set("toJSON", {
  versionKey: false,
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
  },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
