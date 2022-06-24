const express = require("express");
const router = express.Router();
const {
  AddContractHandler,
  GetAllContractHandler,
  GetOneContractHandler,
  UpdateContractHandler,
  DeleteContractHandler,
} = require("./contractServices");
const { requireAuth } = require("../authentification/auth");
const { requireAuthAdmin } = require("../authentification/authAdmin");

router.post(
  "/postContract",

  AddContractHandler
);
router.get("/getAllContract", GetAllContractHandler);
router.get("/getContract/:contractId", GetOneContractHandler);
router.put("/updateContract/:contractId", UpdateContractHandler);
router.delete(
  "/deleteContract/:contractId",

  DeleteContractHandler
);

module.exports = router;
