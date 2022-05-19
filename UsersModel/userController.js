const User = require("./userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function generateAccessToken(user) {
  const userInfo = {
    id: user.id,
    role: user.role,
  };
  const token = jwt.sign(userInfo, process.env.TOKEN_SECRET);
  return token;
}

function register(userDetaills) {
  console.log(userDetaills);
  return User.create(userDetaills).then((userData) => {
    const token = generateAccessToken(userData);
    return { ...userData.toJSON(), token };
  });
}

function loginWithEmail({ email, password }) {
  return User.findOne({ email: email }).then((user) => {
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateAccessToken(user);
      return { ...user.toJSON(), token };
    } else throw new Error("password doesn't match");
  });
}

function getAllUsers() {
  return User.find({ role: "USER" });
}

module.exports = { register, loginWithEmail, getAllUsers };
