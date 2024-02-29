const globalErrorController = (err, req, res, next) => {
  const errObject = {
    status: "fail",
    statusCode: err.statusCode || 500,
    message: err.message || "Something went wrong please try again later",
  };

  if (err.name === "ValidationError") {
    const errString = Object.values(err.errors).map((el) => el.message);
    errObject.message = `Invalid Input:  ${errString.join(". ")}`;
    errObject.statusCode = 400;
  }

  if (err.code === 11000) {
    const value = err.keyValue.email;
    errObject.message = `The user with ${value} already exist`;
    errObject.statusCode = 400;
  }

  return res.status(errObject.statusCode).json({
    status: errObject.status,
    message: errObject.message,
    error: err,
  });
};

module.exports = globalErrorController;
