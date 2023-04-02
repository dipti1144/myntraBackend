const express = require("express");
const {
  newOrder,
  myOrders,
  getSingleOrder,
  deleteOrder,
} = require("../controller/orderController");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");



const orderRoute = express.Router();

orderRoute.post("/new", newOrder);
orderRoute.get("/me",myOrders);
orderRoute.get("/:id", getSingleOrder);
orderRoute.delete("/:id",deleteOrder)
module.exports = orderRoute;

