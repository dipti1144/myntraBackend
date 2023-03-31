const express = require("express");
const {
  newOrder,
  myOrders,
  getSingleOrder,
} = require("../controller/orderController");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");



const orderRoute = express.Router();

orderRoute.post("/new",requireSignIn, isAdmin,   newOrder);
orderRoute.get("/me" ,myOrders);
orderRoute.get("/:id", getSingleOrder);
module.exports = orderRoute;
