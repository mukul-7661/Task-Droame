const User = require("../models/User");
const router = require("express").Router();

//get all users
router.get("/getAll", async (req, res) => {
  try {
    const users = await User.find();
    const userData = [];
    res.json(userData.concat(...users));
  } catch (err) {
    res.status(400).json(err);
  }
});

//create a user

router.post("/create", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone_number: req.body.phone_number,
    });
    newUser.save();

    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

//edit a user

router.put("/edit", async (req, res) => {
  try {
    console.log("edit");
    User.updateOne(
      { email: req.body.email },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          phone_number: req.body.phone_number,
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

module.exports = router;
