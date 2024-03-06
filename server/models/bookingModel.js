const mongoose = require("mongoose");
const validator = require("validator");

const bookingSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: [true, "Email already exist"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  bookingDateAndTime: {
    type: String,
    required: [true, "This field is required"],
    unique: [true, "Slot is already taken, please chose another slot"],
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
});
