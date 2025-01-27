const userModel = require("../models/user");
const bcrypt = require("bcrypt");

exports.checkUserExists = async (email) => {
  const userExists = await userModel.findOne({ email });
  return userExists;
};

exports.createUser = async (firstName, lastName, email, password) => {
  // hash the password
  const hash = bcrypt.hashSync(password, 10);

  const newUser = await userModel.create({
    firstName,
    lastName,
    email,
    password: hash,
  });
  return newUser;
};
