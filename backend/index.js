const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bookings = require("./routes/bookings");
const users = require("./routes/users");

mongoose.connect(
  "mongodb+srv://mukul7661:jJ5WFXK0KQanBoWn@cluster0.jpvjyty.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(cors());
app.use(express.json());

// bookings api
app.use("/api/bookings", bookings);

// users api
app.use("/api/users", users);

app.listen(8800, () => {
  console.log("Backend server is running!");
});

module.exports = app;

// mukul7661
// jJ5WFXK0KQanBoWn
