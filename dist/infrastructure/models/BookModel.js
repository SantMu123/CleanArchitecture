import mongoose, { Schema } from "mongoose";
const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, required: true },
});
const BookModel = mongoose.model("Book", BookSchema);
export { BookModel };
