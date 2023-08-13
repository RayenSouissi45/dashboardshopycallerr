const express = require("express");
const router = express.Router();
const { Product } = require("../models");

router.post("/addProduct", async (req, res) => {
  const {
    productName,
    price,
    description,
    productImage,
    availability,
    quantity,

    totalSales,
    // totalSales,
  } = req.body;

  try {
    const product = await Product.create({
      productName,
      price,
      description,
      productImage,
      availability,
      quantity,
      totalSales: 10,
      imagePath: "hello",
    });
    console.log(product);

    return res.status(201).json({ status: "Product successfully created!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

router.put("/product/:id", async (req, res) => {
  const { id: productId } = req.params;

  try {
    const productToUpdate = await Product.findOne({ where: { id: productId } });
    if (!productToUpdate) {
      return res.status(404).json({ message: "Product not found" });
    }

    const {
      productName,
      price,
      description,
      availability,
      quantity,
      productImage,
      totalSales,
    } = req.body;

    const imagePath = `../../../../assets/products/${productImage}`;

    await Product.update(
      {
        productName: productName || productToUpdate.productName,
        price: price || productToUpdate.price,
        description: description || productToUpdate.description,
        availability: availability || productToUpdate.availability,
        quantity: quantity || productToUpdate.quantity,
        productImage: productImage || productToUpdate.productImage,
        totalSales: totalSales || productToUpdate.totalSales,
        imagePath,
      },
      {
        where: { id: productId },
      }
    );
    res.json({ message: `Product with ID ${productId} has been updated` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

router.delete("/product/:id", async (req, res) => {
  const { id: productId } = req.params;

  try {
    const productToDelete = await Product.findOne({ where: { id: productId } });
    if (!productToDelete) {
      return res.status(404).json({ message: "Product not found" });
    }

    await productToDelete.destroy();
    res.json({
      message: `Product with ID ${productId} has been deleted`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/product", async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: [
        "id",
        "productName",
        "price",
        "description",
        "availability",
        "quantity",
        "productImage",
        "totalSales",
        "imagePath", // Include the imagePath column in the response
      ],
    });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
