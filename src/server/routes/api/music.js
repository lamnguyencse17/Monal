const express = require("express");
const router = express.Router();

import stream from "@helpers/stream";
import upload from "@middlewares/upload";

router.post("/", upload.single("file"), async (req, res) => {
  res.send({ message: "done" });
});

router.get("/", (req, res) => {
  let file = req.query.file;
  let data = stream(file);
  res.setHeader(
    "Content-Disposition",
    "attachment;filename=" + data.s.filter.filename
  );
  res.setHeader("Content-Type", "audio/mp3");
  data.on("data", async (chunk) => {
    res.write(chunk);
  });
  data.on("end", () => res.end());
});

module.exports = router;
