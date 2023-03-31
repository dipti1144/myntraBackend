const express = require("express");
const {
  newOrder,
  myOrders,
  getSingleOrder,
} = require("../controller/orderController");



const orderRoute = express.Router();

orderRoute.post("/new",  newOrder);
orderRoute.get("/me", myOrders);
orderRoute.get("/:id", getSingleOrder);
module.exports = orderRoute;
