import mongoose from "mongoose";
let Schema = mongoose.Schema;

let musicSchema = new Schema({
  filename: String,
  length: Number,
});
export default musicSchema;
