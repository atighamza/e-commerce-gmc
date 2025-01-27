const express = require("express");
const app = express();
require("dotenv").config();

const { connectDB } = require("./config/db_connect");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/errorHandler");
connectDB();

app.use(express.json());

app.use("/user", userRoutes);

app.use(errorHandler);

const port = 4000;
app.listen(4000, () => {
  console.log(`server is running on port ${port}`);
});
