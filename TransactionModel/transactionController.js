const transaction = require("./transactionSchema");

function AddTransaction(transDetaills) {
  return transaction.create(transDetaills);
}

function GetTransaction() {
  return transaction.find();
}

function UpdateTransaction(transactionId, detaills) {
  return transaction.findByIdAndUpdate({ _id: transactionId }, detaills);
}

function DeleteTransaction(transactionId) {
  return transaction.findByIdAndDelete({ _id: transactionId });
}

module.exports = {
  AddTransaction,
  GetTransaction,
  UpdateTransaction,
  DeleteTransaction,
};
