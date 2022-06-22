const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  contractId: {
    type: mongoose.Types.ObjectId,
    unique: true,
  },
  saleType: String,
  dateSigned: String,
  price: String,
  profitPercentage: Number,
  profitAmount: Number,
  date: String,
});

TransactionSchema.set("toJSON", {
  versionKey: false,
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
  },
});

const transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = transaction;
