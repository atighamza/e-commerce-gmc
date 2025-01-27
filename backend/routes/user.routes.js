const express = require("express");
const {
  register,
  login,
  credentials,
} = require("../controller/user.controller");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, credentials);
module.exports = router;
