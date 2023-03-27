const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    booking_id: {
      type: String,
      // required: true,
      unique: true,
    },
    location_id: {
      type: String,
      max: 500,
      // required: true,
    },
    drone_shot_id: {
      type: String,
      max: 500,
      // required: true,
    },
    createdTime: {
      type: String,
      max: 500,
      // required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
