const mongoose = require("mongoose");
const ContractSchema = new mongoose.Schema({
  estateId: {
    type: mongoose.Types.ObjectId,
  },

  employeeId: mongoose.Types.ObjectId,
  client: String,
  contractType: String,
  contractDetails: String,
  price: Number,
  dateSigned: String,
  endDate: String,
  addedDateContract: {
    type: Date,
    default: Date.now,
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
