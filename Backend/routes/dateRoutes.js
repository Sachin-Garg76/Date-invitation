const express = require("express");
const DateModel = require("../models/Date");

const router = express.Router();

// Save date invitation
router.post("/", async (req, res) => {
  try {
    const { answer, location, date, time } = req.body;

    // Check required data
    if (!location || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "Location, date and time are required.",
      });
    }

    // Create new date
    const newDate = new DateModel({
      answer: answer || "yes",
      location,
      date,
      time,
    });

    // Save to MongoDB
    const savedDate = await newDate.save();

    res.status(201).json({
      success: true,
      message: "Date invitation saved successfully!",
      data: savedDate,
    });
  } catch (error) {
    console.error("Error saving date:", error);

    res.status(500).json({
      success: false,
      message: "Failed to save date invitation.",
      error: error.message,
    });
  }
});

module.exports = router;