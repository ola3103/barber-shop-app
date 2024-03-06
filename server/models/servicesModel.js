const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  servicePrice: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
