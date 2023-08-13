const express = require("express");
const router = express.Router();
const { Order } = require("../models");

// router.get("/allOrders/:id", async (req, res) => {
//   try {
//     const { id: userId } = req.params;
//     const listOrders = await Order.findAll({ where: { name: userId } });
//     res.status(200).json(listOrders);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err });
//   }
// });
router.get("/getordersbyusername/:client", async (req, res) => {
  try {
    const client = req.params.client;
    const orders = await Order.findAll({ where: { client_name: client } });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// router.post("/passOrder", async (req, res) => {
//   try {
//     const { user_id, orders } = req.body;

//     const createdOrder = await Order.create({
//       name: user_id,
//       address: orders[0].address,
//     });

//     const createdOrderItems = await Promise.all(
//       orders.map(async (order) => {
//         const { quantity, price, product_name } = order;
//         const createdOrderItem = await Order.create({
//           name: user_id,
//           address: orders[0].address,
//           product_name,
//           quantity,
//           price,
//         });
//         return createdOrderItem;
//       })
//     );

//     return res.status(201).json({
//       status: "Order successfully placed!",
//       order: createdOrder,
//       orderItems: createdOrderItems,
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server error" });
//   }
// });

router.post("/createorder", async (req, res) => {
  try {
    const { client_name, delivery_address, product_name, quantity, price } =
      req.body; // Assuming the request body contains the necessary order data

    const newOrder = await Order.create({
      client_name,
      delivery_address,
      product_name,
      quantity,
      price,
    });

    res.json(newOrder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// -------------------------------
// router.post("/addProduct", async (req, res) => {
//   const {
//     productName,
//     price,
//     description,
//     productImage,
//     availability,
//     quantity,

//     totalSales,
//     // totalSales,
//   } = req.body;

//   try {
//     const product = await Product.create({
//       productName,
//       price,
//       description,
//       productImage,
//       availability,
//       quantity,
//       totalSales: 10,
//       imagePath: "hello",
//     });
//     console.log(product);

//     return res.status(201).json({ status: "Product successfully created!" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server error" });
//   }
// });
// -------------------------------

router.get("/getorders", async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
