const Contract = require("./contractSchema");

function AddContract(contractDetaills) {
  return Contract.create(contractDetaills);
}

function GetAllContract() {
  return Contract.find().populate("employeeId", "avatar username");
}
function GetOneContract(contractId) {
  return Contract.findOne({ _id: contractId });
}
function DeleteContract(contractId) {
  return Contract.findByIdAndDelete({ _id: contractId });
}
function UpdateContract(contractId, input) {
  return Contract.findByIdAndUpdate({ _id: contractId }, input);
}

module.exports = {
  AddContract,
  GetAllContract,
  GetOneContract,
  DeleteContract,
  UpdateContract,
};
