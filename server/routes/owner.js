const express = require("express");
const router = express.Router();
const { Owner } = require("../models");


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const owner = await Owner.findOne({ where: { email } });

    if (!owner) {
      return res.status(400).json({ message: "Owner Doesn't Exist" });
    }

    const isMatch = password === owner.password;

    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Wrong Email And Password Combination" });
    }

    return res.json({ id: owner.id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

