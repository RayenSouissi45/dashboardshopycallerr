
const express = require("express");
const router = express.Router();
const { Clients } = require("../models");

router.post("/addClient", async (req, res) => {
  const { fullname, phone, email, deliveryadress } = req.body;

  try {
    const client = await Clients.create({
      fullname,
      phone,
      email,
      deliveryadress,
    });

    return res.status(201).json({ status: "Client successfully created!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

router.delete("/client/:id", async (req, res) => {
  const { id: clientId } = req.params;

  try {
    const clientToDelete = await Clients.findOne({ where: { id: clientId } });
    if (!clientToDelete) {
      return res.status(404).json({ message: "Client not found" });
    }

    await clientToDelete.destroy();
    res.json({
      message: `Client with ID ${clientId} has been deleted`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.put("/client/:id", async (req, res) => {
  const { id: client } = req.params;
  const { fullname, phone, email, deliveryadress } = req.body;

  try {
    const clientToUpdate = await Clients.findOne({ where: { id: client } });
    if (!clientToUpdate) {
      return res.status(404).json({ message: "Client not found" });
    }

    await Clients.update(
      {
        fullname: fullname || clientToUpdate.fullname,
        phone: phone || clientToUpdate.phone,
        email: email || clientToUpdate.email,
        deliveryadress: deliveryadress || clientToUpdate.deliveryadress,
      },
      {
        where: { id: client },
      }
    );

    res.json({ message: `Client with ID ${client} has been updated` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});


router.get("/client", async (req, res) => {
  try {
    const clients = await Clients.findAll({
      attributes: ["id","fullname", "phone", "email", "deliveryadress"],
    });
    res.json(clients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
