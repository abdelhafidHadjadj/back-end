const jwt = require("jsonwebtoken");

const requireAuthAdmin = (req, res, next) => {
  const authorization = req.header("Authorization");
  let role;
  if (!authorization) {
    res.status(403);
    res.send("token not exist");
    return;
  }
  const [, token] = authorization.split(" ");

  try {
    let userInfo = jwt.verify(token, process.env.TOKEN_SECRET);
    if (userInfo.role != "ADMIN") {
      throw new Error("Not Admin");
    }
    req.body.role = userInfo.role;
    next();
  } catch (error) {
    res.status(403);
    res.send({ message: "Token not valid" });
    return;
  }
};

module.exports = { requireAuthAdmin };
