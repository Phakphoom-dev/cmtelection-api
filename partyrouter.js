const express = require("express");
const router = express.Router();
const Party = require("./party");
const Metro = require("./metro");
const CCC = require("./ccc");

// GET all
router.get("/", (req, res) => {
  Party.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

router.post("/", (req, res) => {
  const obj = new Party(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย");
  });
});

// PUT (update current data)
router.put("/:partyId/:_id/:stdType/:score", (req, res) => {
  const { partyId, _id, stdType } = req.params;
  let updateScore = +req.params.score;
  console.log(typeof updateScore);
  if (stdType === "C") {
    CCC.findOneAndUpdate({ _id: _id }, { isChoose: true }, (err, data) => {
      if (err) return res.status(400).send(err);
    });
  } else {
    Metro.findOneAndUpdate({ _id: _id }, { isChoose: true }, (err, data) => {
      if (err) return res.status(400).send(err);
    });
  }

  Party.findOneAndUpdate(
    { _id: partyId },
    { score: updateScore + 1 },
    (err, data) => {
      if (err) return res.status(400).send(err);
      res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
    }
  );
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Party.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;
