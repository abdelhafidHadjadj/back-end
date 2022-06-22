const jwt = require("jsonwebtoken");

function requireAuth(req, res, next) {
  const authorization = req.header("Authorization");
  let userId;
  if (!authorization) {
    res.status(403);
    res.send({ error: "Token not exist" });
    return;
  }
  const [, token] = authorization.split(" ");

  try {
    let userInfo = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(userInfo);

    req.body.userId = userInfo.id;
    res.send(userInfo);
    next();
  } catch (error) {
    res.status(403);
    res.send({ error: "Token not valid" });
  }
}

module.exports = { requireAuth };
