import express from "express";
import config from "./config";
import bodyParser from "body-parser";
import serverRender from "../renderers/server";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import ejs from "ejs";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
mongoose.connect(process.env.DATA_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const initialContent = serverRender(req);
  let file = await ejs.renderFile(
    path.resolve(process.cwd(), "./views/index.ejs")
  );
  res.write(file);
  initialContent.pipe(res, { end: false });
  const end = `</div>
  <script src="/bundle.js" charset="utf-8"></script>
  </body>
  </html>`;
  initialContent.on("end", () => {
    res.write(end);
    res.end();
  });
  // res.render("index", { initialContent });
});

app.use("/api/music", require("./routes/api/music"));

app.listen(config.port, () => console.info(`Running on ${config.port}`));
