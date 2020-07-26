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
    class: {
      type: String,
    },
    room: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    stdType: {
      type: String,
    },
  },
  {
    collection: "Metro",
  }
);

const Metro = mongoose.model("metro", metroSchema);
module.exports = Metro;
