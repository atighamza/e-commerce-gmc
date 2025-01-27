const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwtService = require("jsonwebtoken");

const { checkUserExists, createUser } = require("../services/user.service");

exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "paramters are missing" });
    }

    const userExists = await checkUserExists(email);

    if (userExists) {
      return res
        .status(400)
        .json({ message: "user with this email already exists" });
    }

    const newUser = await createUser(firstName, lastName, email, password);

    if (newUser) {
      return res.status(201).json({ message: "user created successfully! " });
    }
  } catch (err) {
    next();
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ message: "email is missing" });
    }
    if (!password) {
      return res.status(400).json({ message: "password is missing" });
    }

    const userExists = await checkUserExists(email);

    if (!userExists) {
      return res
        .status(400)
        .json({ message: "user doesn't exist with this email" });
    }

    const match = bcrypt.compareSync(password, userExists.password);

    if (!match) {
      return res.status(400).json({ message: "password is wrong" });
    }

    const token = jwtService.sign(
      { id: userExists._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    return res.status(400).json({ message: "login successfully", token });
  } catch (err) {
    next();
  }
};

exports.credentials = async (req, res, next) => {
  try {
    const data = { id: req.id, name: "hamza" };
    return res.status(400).json({ data });
  } catch (err) {
    next();
  }
};
