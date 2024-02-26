require("dotenv").config();
require("express-async-errors");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const globalErrorController = require("./controllers/globalErrorController");
const authRouter = require("./routes/authRoute");

app.use("/", authRouter);
app.use(globalErrorController);
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `${req.originalUrl} cannot be found on this server`,
  });
});

const PORT = 4050 || process.env.PORT;

const startApp = async () => {
  try {
    await mongoose.connect(process.env.URI_CONNECTION_STRING);
    console.log("DB CONNECTED");
    app.listen(PORT, () =>
      console.log(`server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

startApp();