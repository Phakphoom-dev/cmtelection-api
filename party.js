const mongoose = require("mongoose");

const partySchema = mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
    },
    score: {
      type: Number,
    },
    img: {
      type: String,
    },
  },
  {
    collection: "Party",
  }
);

const Party = mongoose.model("party", partySchema);
module.exports = Party;
