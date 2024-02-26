import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser());
app.use("/api/user",userRoutes)



mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB Connected")).catch((err) => console.log(err))
app.listen(process.env.PORT, () => console.log("running"))
