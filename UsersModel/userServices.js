const bcrypt = require("bcryptjs");
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
    .then(async (data) => {
      await res.send(data);
      console.log("get Users");
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found" });
      res.status(404);
    });
}
function getAllAdminsHandler(req, res) {
  userController
    .getAllAdmin()
    .then((data) => {
      res.send(data);
      console.log("get Admins");
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found" });
      res.status(404);
    });
}
function getAllUsersAdminsHandler(req, res) {
  userController
    .getAllUsersAdmins()
    .then((data) => {
      res.send(data);
      console.log("get Admins and Users");
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Not found" });
      res.status(404);
    });
}

async function UpdateUserHandler(req, res) {
  const { userId } = req.params;

  const input = req.body;
  let list = req.files;

  let array = [];
  if (list != "") {
    console.log(list);

    list.filter((el) => {
      if (el.path != undefined) {
        console.log("success");
        array.push(el.path);
        return array;
      } else {
        console.log("error");
      }
    });
    console.log(array);
  }
  let body = {};
  if (list != "") {
    body = { ...input, avatar: array };
  } else {
    body = { ...input };
  }
  console.log(body);

  userController
    .updateUser(userId, body)
    .then((data) => {
      res.send(data);
      res.status(201);
      console.log("Admin Updating");
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send({ message: "Not Found :( 404" });
    });
}

module.exports = {
  registerHandler,
  getAllUsersHandler,
  loginHandler,
  getAllAdminsHandler,
  UpdateUserHandler,
  getAllUsersAdminsHandler,
};
