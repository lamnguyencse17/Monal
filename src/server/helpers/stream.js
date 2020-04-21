import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const stream = (name) => {
  let gridfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "Music",
  });
  return gridfs.openDownloadStreamByName(name);
};

export default stream;
