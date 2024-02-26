exports.testRoute = async (req, res) => {
  res.status(200).json({ status: "success", message: "home page" });
};
