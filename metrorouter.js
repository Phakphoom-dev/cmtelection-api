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
  Metro.find({ id: req.params.id, stdType: req.params.stdType }).exec(
    (err, data) => {
      if (err) return res.status(400).send(err);
      const isMetro = data[0].isMetro;
      if (isMetro) {
        res.status(200).send(data);
      } else {
        CCC.find({ id: req.params.id }).exec((err, data) => {
          if (err) return res.status(400).send(err);
          res.status(200).send(data);
        });
      }
    }
  );
});

// POST (create new data)
router.post("/", (req, res) => {
  const obj = new Metro(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Metro.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Metro.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;
