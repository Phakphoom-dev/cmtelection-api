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
    collection: "CCC",
  }
);

const CCC = mongoose.model("ccc", cccSchema);
module.exports = CCC;
