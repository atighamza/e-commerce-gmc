const express = require("express");
const app = express();
require("dotenv").config();

const { connectDB } = require("./config/db_connect");

connectDB();

//console.log(process.env.DATABASE_URL);
app.get("/", (req, res) => {
  res.send("hello ! ");
});

app.listen(4000, () => {
  console.log("server is running on port 3000");
});
