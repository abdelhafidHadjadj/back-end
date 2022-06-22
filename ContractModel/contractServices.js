const contractController = require("./contractController");
function AddContractHandler(req, res) {
  const { propertyId } = req.params;
  const contractDetaills = req.body;
  contractDetaills.estateId = propertyId;

  contractController
    .AddContract(contractDetaills)
    .then((data) => {
      res.send(data);
      console.log("contract added");
      res.status(201);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Something went wrong" });
      res.status(404);
    });
}

function GetAllContractHandler(req, res) {
  contractController
    .GetAllContract()
    .then((data) => {
      res.send(data);
      console.log("Get all contracts");
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found ): " });
      res.status(404);
    });
}
function GetOneContractHandler(req, res) {
  const { contractId } = req.params;
  contractController
    .GetOneContract(contractId)
    .then((data) => {
      res.send(data);
      console.log(`Get ${contractId} Contract`);
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found" });
      res.status(404);
    });
}
function UpdateContractHandler(req, res) {
  const { contractId } = req.params;
  const detaills = req.body;
  console.log(contractId);
  contractController
    .UpdateContract(contractId, detaills)
    .then((data) => {
      res.send(data);
      res.status(201);
      console.log("Contract Updated");
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Something is wrong" });
      res.status(404);
    });
}

function DeleteContractHandler(req, res) {
  const { contractId } = req.params;
  contractController
    .DeleteContract(contractId)
    .then((data) => {
      res.send(data);
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found" });
      res.status(404);
    });
}

module.exports = {
  AddContractHandler,
  GetAllContractHandler,
  GetOneContractHandler,
  UpdateContractHandler,
  DeleteContractHandler,
};
