const mongoose = require("mongoose");

const cccSchema = mongoose.Schema(
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
    collection: "CCC",
  }
);

const CCC = mongoose.model("ccc", cccSchema);
module.exports = CCC;
