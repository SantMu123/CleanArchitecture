import { BookModel } from "../models/BookModel";
export class MongoBookRepository {
    async findAll() {
        return await BookModel.find();
    }
    async findById(id) {
        return await BookModel.findById(id);
    }
    async create(book) {
        const newBook = new BookModel(book);
        await newBook.save();
        return newBook;
    }
    async update(book) {
        await BookModel.findByIdAndUpdate(book.id, book);
    }
    async delete(id) {
        await BookModel.findByIdAndDelete(id);
    }
}
