import multer from "multer";
import crypto from "crypto";
import path from "path";

const GridFsStorage = require("multer-gridfs-storage");
require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });

// HANDLING IS REQUIRED

let storage = new GridFsStorage({
  url: `${process.env.DATA_URI}`,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(4, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: "Music",
        };
        resolve(fileInfo);
      });
    });
  },
});

let upload = multer({ storage });

export default upload;
