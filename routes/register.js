const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Username or email already exists');
      } else {
        res.status(400).send(error);
      }
    }
  });

module.exports = router;
