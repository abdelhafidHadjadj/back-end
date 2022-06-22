const mongoose = require("mongoose");
const { Schema } = mongoose;
const ContractSchema = new mongoose.Schema({
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  propertyId: String,
  client: String,
  contractType: String,
  contractDetails: String,
  price: Number,
  totalAmount: Number,
  period: Number,
  dateSigned: String,
  endDate: String,
  addedDateContract: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "Pending",
  },
});
ContractSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});
const Contract = mongoose.model("Contract", ContractSchema);

module.exports = Contract;
