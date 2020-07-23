const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const mongo_uri =
  "mongodb://admin:1234@cmtelection-shard-00-00.p4omm.gcp.mongodb.net:27017,cmtelection-shard-00-01.p4omm.gcp.mongodb.net:27017,cmtelection-shard-00-02.p4omm.gcp.mongodb.net:27017/CmtElection?ssl=true&replicaSet=atlas-imsagd-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  (error) => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("[success] task 1 : listening on port " + port);
});

app.get("/", (req, res) => {
  res.status(200).send("หน้าแรกของ api express");
});

const Score = require("./electionrouter");
const Metro = require("./metrorouter");
const CCC = require("./cccrouter.js");
const Std = require("./stdrouter");
const Party = require("./partyrouter.js");
app.use("/api/score", Score);
app.use("/api/metro", Metro);
app.use("/api/ccc", CCC);
app.use("/api/std", Std);
app.use("/api/party", Party);

app.use((req, res, next) => {
  const err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});
