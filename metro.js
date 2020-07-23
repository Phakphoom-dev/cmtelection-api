const mongoose = require("mongoose");

const metroSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
    },
    isChoose: {
      type: Boolean,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    score: {
      type: Number,
    },
    isMetro: {
      type: Boolean,
    },
  },
  {
    collection: "Metro",
  }
);

const Metro = mongoose.model("metro", metroSchema);
module.exports = Metro;
