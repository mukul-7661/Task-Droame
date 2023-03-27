const Booking = require("../models/Booking");
const router = require("express").Router();

//get all bookings
router.get("/getAll", async (req, res) => {
  try {
    const bookings = await Booking.find();
    const bookingData = [...bookings];
    // .concat(...bookings)
    res.json(bookingData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//create a booking

router.post("/create", async (req, res) => {
  try {
    const newBooking = new Booking({
      booking_id: req.body.booking_id,
      location_id: req.body.location_id,
      drone_shot_id: req.body.drone_shot_id,
      createdTime: req.body.createdTime,
    });
    await newBooking.save();

    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

//edit a booking

router.put("/edit", async (req, res) => {
  try {
    console.log(req.body);
    await Booking.updateOne(
      { booking_id: req.body.booking_id },
      {
        $set: {
          booking_id: req.body.booking_id,
          location_id: req.body.location_id,
          drone_shot_id: req.body.drone_shot_id,
          createdTime: req.body.createdTime,
        },
      },
      function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
      }
    );

    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a booking

router.delete("/delete/:id", async (req, res) => {
  try {
    await Booking.deleteOne({ booking_id: req.params.id });

    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
