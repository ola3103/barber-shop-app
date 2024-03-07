const Booking = require("../models/bookingModel");
const CustomError = require("../errors/customError");

exports.createBooking = async (req, res) => {
  const newBooking = await Booking.create({
    ...req.body,
    user: req.user.userId,
  });

  const booking = await Booking.findOne({ _id: newBooking._id }).populate(
    "services"
  );

  res.status(201).json({
    status: "success",
    message: "Booking created successfully",
    data: booking,
  });
};

exports.getAllBookingForSingleUser = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.userId }).populate(
    "services"
  );

  res
    .status(200)
    .json({ status: "success", totalBooking: bookings.length, data: bookings });
};

exports.getSingleBookingForUser = async (req, res) => {
  const { bookingId } = req.params;

  const booking = await Booking.findOne({
    _id: bookingId,
    user: req.user.userId,
  });

  if (!booking) {
    throw new CustomError(`Booking with id: ${bookingId} cannot be found`, 404);
  }

  res.status(200).json({ status: "success", data: booking });
};

exports.deleteBookingForUser = async (req, res) => {
  const { bookingId } = req.params;

  const booking = await Booking.findOneAndDelete({
    _id: bookingId,
    user: req.user.userId,
  });

  if (!booking) {
    throw new CustomError(`Booking with id: ${bookingId} cannot be found`, 404);
  }

  res
    .status(200)
    .json({ status: "success", message: "Booking successfully deleted" });
};
