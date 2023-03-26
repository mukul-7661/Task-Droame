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

//create a user

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

//unfollow a user

// router.post("/unfollow/:id", async (req, res) => {
//   if (req.user._id !== req.params.id) {
//     try {
//       const user = await User.findById(req.params.id);
//       const currentUser = await User.findById(req.user._id);
//       if (user.followers.includes(req.user._id)) {
//         await user.updateOne({ $pull: { followers: req.user._id } });
//         await currentUser.updateOne({ $pull: { followings: req.params.id } });
//         res.status(200).json("user has been unfollowed");
//       } else {
//         res.status(200).json("you dont follow this user");
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("you cant unfollow yourself");
//   }
// });

module.exports = router;
