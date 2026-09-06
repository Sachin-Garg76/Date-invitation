const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema(
  {
    answer: {
      type: String,
      default: "yes",
    },

    location: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DateModel = mongoose.model("Date", dateSchema);

module.exports = DateModel;