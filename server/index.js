const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const clientsRouter = require("./routes/clients");
app.use("/clients", clientsRouter);
const commercialRouter = require("./routes/commercial");
app.use("/commercial", commercialRouter);
const productsRouter = require("./routes/product");
app.use("/products", productsRouter);
const ordersRouter = require("./routes/order");
app.use("/order", ordersRouter);
const ownerRouter = require("./routes/owner");
app.use("/api", ownerRouter);

const port = process.env.PORT || 4040;

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database is synced");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
