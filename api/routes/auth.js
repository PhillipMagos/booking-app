import express from "express";

const router = express.Router(); // Instead of app.get, we use router.get

router.get("/", (req, res) => {
  res.send("Hello, this is auth endpoint")
})
router.get("/register", (req, res) => {
  res.send("Hello, this is auth endpoint")
})

export default router; // We export the router