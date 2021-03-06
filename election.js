const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    score: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  {
    collection: "SCORE",
  }
);

const Score = mongoose.model("score", scoreSchema);
module.exports = Score;
