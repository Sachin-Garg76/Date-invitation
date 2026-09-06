const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const dateRoutes = require("./routes/dateRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

// API Routes
app.use("/api/date", dateRoutes);

// Test route
// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend server is running!",
  });
});
// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});