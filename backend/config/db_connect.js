// function to connect to mongodb
const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then((result) => {
      console.log("connected to Mongodb");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = { connectDB };
