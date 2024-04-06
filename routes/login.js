// routes/login.js
const User = require("../models/User");
const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).send("Invalid username or password.");
    }
    if (user.password !== req.body.password) {
      return res.status(400).send("Invalid username or password.");
    }
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
