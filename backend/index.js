const express=require("express");
const app=express();
const dotenv=require("dotenv");

const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const productRoute=require("./routes/product")
const cartRoute=require("./routes/cart")
const orderRoute=require("./routes/order")
const cors = require("cors");


dotenv.config();

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://vansh:Vansh%401234@cluster0.chy1bj6.mongodb.net/shopit").then(()=> console.log("DB Connected")).catch((err)=>
{
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);


app.listen(process.env.PORT || 5000,()=>                       //callback func
{
    console.log("Backend Server is running");
});