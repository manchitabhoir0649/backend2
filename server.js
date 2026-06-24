const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// ROUTES
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

// MONGODB CONNECTION (FIXED)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err.message);
  });

// SERVER START
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});