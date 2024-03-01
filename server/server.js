require("dotenv").config();
require("express-async-errors");

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const globalErrorController = require("./controllers/globalErrorController");
const authRouter = require("./routes/authRoute");

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/v1/auth", authRouter);
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
