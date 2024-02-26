const globalErrorController = (err, req, res) => {
  const errObject = {
    status: "fail",
    statusCode: err.statusCode || 500,
    message: err.message || "Something went wrong please try again later",
  };

  res
    .status(errObject.statusCode)
    .json({ status: errObject.status, message: errObject.message, error: err });
};

module.exports = globalErrorController;
