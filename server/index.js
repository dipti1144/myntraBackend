

const express= require("express");
const connection  = require("./config/db");
const orderRoute = require("./routes/orderRoute");
const productRoute = require("./routes/productRoute");
const userRouter = require("./routes/user.route");
const cookieParser = require("cookie-parser");
const cors=require("cors");
const app=express();
require("dotenv").config();
app.use(express.json())
const port= process.env.PORT
app.use(cookieParser());
app.use(cors());


app.get("/",(req,res)=>{
    res.send("home page")
})

app.use("/user",userRouter);
app.use("/products",productRoute)
app.use("/cart",orderRoute)

connection();
app.listen(port,()=>{
    console.log(`port is running at ${port}`)
})