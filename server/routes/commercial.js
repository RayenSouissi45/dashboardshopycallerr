const express = require("express");
const router = express.Router();
const { Commercial } = require("../models");

router.post("/addcommercial", async (req, res) => {
  const { email, password, phone, firstname, lastname } = req.body;

  try {
    const newCommercial = await Commercial.create({
      email,
      password,
      phone,
      firstname,
      lastname,
    });

    return res.status(201).json({ status: "Commercial successfully created!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

router.delete("/deletecommercial/:id", async (req, res) => {
  const { id: commercialId } = req.params;

  try {
    const commercialToDelete = await Commercial.findOne({
      where: { id: commercialId },
    });
    if (!commercialToDelete) {
      return res.status(404).json({ message: "Commercial not found" });
    }

    await commercialToDelete.destroy();
    res.json({
      message: `Commercial with ID ${commercialId} has been deleted`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.put("/putcommercial/:id", async (req, res) => {
  const { id: commercialId } = req.params;

  try {
    const commercialToUpdate = await Commercial.findOne({
      where: { id: commercialId },
    });
    if (!commercialToUpdate) {
      return res.status(404).json({ message: "Commercial not found" });
    }

    const { email, password, phone, firstname, lastname } = req.body;

    await Commercial.update(
      {
        email: email || commercialToUpdate.email,
        password: password || commercialToUpdate.password,
        phone: phone || commercialToUpdate.phone,
        firstname: firstname || commercialToUpdate.firstname,
        lastname: lastname || commercialToUpdate.lastname,
      },
      {
        where: { id: commercialId },
      }
    );
    res.json({
      message: `Commercial with ID ${commercialId} has been updated`,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

router.get("/getcommercial", async (req, res) => {
  try {
    const commercial = await Commercial.findAll({
      attributes: ["id", "email", "phone", "firstname", "lastname"],
    });
    res.json(commercial);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
