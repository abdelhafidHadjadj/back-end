const transactionController = require("./transactionController");

function GetAllTransactionHandler(req, res) {
  transactionController
    .GetTransaction()
    .then((data) => {
      res.send(data);
      console.log("Get Transaction");
    })
    .catch((err) => {
      res.status(404);
      console.log(err);
      res.send({ message: "Not Found :(" });
    });
}

function AddTransactionHandler(req, res) {
  const body = req.body;
  transactionController
    .AddTransaction(body)
    .then((data) => {
      res.send(data);
      console.log("Transaction added");
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send({ message: "Something went wrong" });
    });
}

function UpdateTransactionHandler(req, res) {
  const body = req.body;
  const { transactionId } = req.params;

  transactionController
    .UpdateTransaction(transactionId, body)
    .then((data) => {
      res.send(data);
      console.log("Transaction Updated");
      res.status(201);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not Found :(" });
    });
}

function DeleteTransactionHandler(req, res) {
  const { transactionId } = req.params;
  transactionController
    .DeleteTransaction(transactionId)
    .then((data) => {
      res.send(data);
      console.log("Transaction Deleted");
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not Found :(" });
      res.status(404);
    });
}

module.exports = {
  GetAllTransactionHandler,
  AddTransactionHandler,
  UpdateTransactionHandler,
  DeleteTransactionHandler,
};
