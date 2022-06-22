const express = require("express");
const router = express.Router();
const {
  GetAllTransactionHandler,
  AddTransactionHandler,
  UpdateTransactionHandler,
  DeleteTransactionHandler,
} = require("./transactionServices");

router.get("/getAllTransaction", GetAllTransactionHandler);
router.post("/addTransaction", AddTransactionHandler);
router.put("updateTransaction/:transactionId", UpdateTransactionHandler);
router.delete("deleteTransaction/:transactionId", DeleteTransactionHandler);

module.exports = router;
