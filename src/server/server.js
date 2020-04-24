import express from "express";
import config from "./config";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
mongoose.connect(process.env.DATA_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/music", require("./routes/api/music"));

app.listen(config.port, () => console.info(`Running on ${config.port}`));
