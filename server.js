require("dotenv").config();
const express = require("express");
const userRouter = require("./UsersModel/userRouter");
const propertyRouter = require("./PropertiesModel/estateRouter");
const contractRouter = require("./ContractModel/contractRouter");
const cloudinaryRouter = require("./Utils/cloudinaryRouter");
const cors = require("cors");

const app = express();
const port = 3000;
require("./database");
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(userRouter);
app.use(propertyRouter);
app.use(contractRouter);
app.use(cloudinaryRouter);

app.listen(port, () => {
  console.log(`Server listening in the ${port}`);
});
