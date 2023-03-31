
const express=require("express");
const { registerUser, loginUser, getAllUser, getSingleUser, deleteUser } = require("../controller/user.controller");



const userRouter=express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get("/:id", getSingleUser)
userRouter.get("/allusers",getAllUser)
userRouter.delete("/:id",deleteUser)
module.exports=userRouter