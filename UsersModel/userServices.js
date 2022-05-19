const bcrypt = require("bcrypt");
const userController = require("./userController");
const jwt = require("jsonwebtoken");

function registerHandler(req, res) {
  const userDetaills = req.body;
  let hashedPassword = bcrypt.hashSync(userDetaills.password, 10);
  userDetaills.password = hashedPassword;
  console.log(userDetaills);
  userController
    .register(userDetaills)
    .then((data) => {
      console.log(data);
      res.send(data);
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: err });
      res.status(404);
    });
}

function loginHandler(req, res) {
  const userInput = req.body;
  userController
    .loginWithEmail(userInput)
    .then((userData) => {
      res.status(200);
      res.send(userData);
    })
    .catch((err) => {
      res.status(404);
      console.log(err);
      res.send({ message: "not found" });
    });
}

function getAllUsersHandler(req, res) {
  userController
    .getAllUsers()
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
  registerHandler,
  getAllUsersHandler,
  loginHandler,
};
