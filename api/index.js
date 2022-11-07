import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"

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

//Allows us to send json data to our DB
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", authRoute);
app.use("/api/hotels", authRoute);
app.use("/api/rooms", authRoute);

// router.get("/home", (req, res) => {
//   res.send("Hello, this is auth endpoint")
// })
app.listen(8800, () =>{
  connect()
  console.log("Connected to the backend!")
})

