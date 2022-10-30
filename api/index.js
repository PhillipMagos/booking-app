import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
// const express = require("express") // Instead '  "type": "module" was put in package.json, line 6
const app = express()
dotenv.config()

const connect = async () => {
try {
  await mongoose.connect(process.env.MONGO);
  console.log("MongoDB connected");
} catch (error) {
  throw error;
}
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
})
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
})

// app.get("/users", (req, res) => {
//   res.send("hello first request!")
// })

//middlewares
app.use("/auth", authRoute);

app.listen(8800, () =>{
  connect()
  console.log("Connected to the backend!")
})