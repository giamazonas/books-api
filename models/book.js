import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    author: { type: String, required: true },
    title: { type: String },
    size: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export { Book };
