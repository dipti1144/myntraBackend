const express=require("express");
const { createProduct, getAllProducts, getSingleProduct } = require("../controller/productController");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");

const productRoute=express.Router();

productRoute.post("/create",requireSignIn, isAdmin,createProduct)

productRoute.get("/getproducts",getAllProducts)

productRoute.get("/getproducts/:id",getSingleProduct)

module.exports=productRoute;