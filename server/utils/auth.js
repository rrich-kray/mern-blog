const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (token.headers.authorization) {
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
    return jwt.sign({ data: payload }), secret, { expiresIn: "2h" };
  },
};
