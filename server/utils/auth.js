const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;

module.exports = {
  authMiddleware: function ({ req }) {
    console.log(req); // req.headers returned undefined. Can't find token in req object.
    console.log(req.body);
    let token = req.body.token || req.query.token || req.headers.authorization; // this should come from app.js
    console.log(token); // logging undefined

    if (token.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }
    return req;
  },

  signToken: function ({ first_name, email, id }) {
    const payload = [first_name, email, id];
    return jwt.sign({ data: payload }, secret, { expiresIn: "2h" });
  },
};
