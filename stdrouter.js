const express = require("express");
const router = express.Router();
const Metro = require("./metro");
const CCC = require("./ccc");

// GET all
router.get("/", (req, res) => {
  Metro.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:id/:stdType", (req, res) => {
  const stdType = req.params.stdType;
  if (stdType === "M") {
    Metro.find({ id: req.params.id }).exec((err, data) => {
      if (err) return res.status(400).send(err);
      console.log(data);
      res.status(200).send(data);
    });
  } else {
    CCC.find({ id: req.params.id }).exec((err, data) => {
      if (err) return res.status(400).send(err);
      res.json({ response: data[0] });
    });
  }
});

module.exports = router;
