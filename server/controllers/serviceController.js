const Service = require("../models/servicesModel");

exports.createService = async (req, res) => {
  const service = await Service.create({ ...req.body, user: req.user.userId });

  res.status(200).json({ status: "success", data: service });
};

exports.getAllService = async (req, res) => {
  const service = await Service.find({});

  res.status(200).json({ status: "success", data: service });
};
