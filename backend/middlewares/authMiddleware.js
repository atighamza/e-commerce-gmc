const jwtService = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "token is not provided" });
    }

    const decoded = jwtService.verify(token, process.env.JWT_SECRET_KEY);

    req.id = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "token is invalid" });
  }
};

module.exports = authMiddleware;
