const express = require("express");
const {
  newOrder,
  myOrders,
  getSingleOrder,
} = require("../controller/orderController");

const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");

const orderRoute = express.Router();

orderRoute.post("/order/new", requireSignIn, newOrder);
orderRoute.get("/orders/me", requireSignIn, myOrders);
orderRoute.get("/order/:id", requireSignIn, getSingleOrder);
module.exports = orderRoute;
