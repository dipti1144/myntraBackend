const express=require("express");
const { createProduct, getAllProducts, getSingleProduct, deleteProduct, updateProduct } = require("../controller/productController");


const productRoute=express.Router();

productRoute.post("/create",createProduct)

productRoute.get("/getproducts",getAllProducts)

productRoute.get("/getproducts/:id",getSingleProduct)

productRoute.delete("/getproducts/:id", deleteProduct)

productRoute.put("/getproducts/:id",updateProduct)

module.exports=productRoute;