export class InMemoryBookRepository {
    constructor() {
        this.books = [];
    }
    async findAll() {
        return this.books;
    }
    async findById(id) {
        return this.books.find(book => book.id === id) || null;
    }
    async create(book) {
        this.books.push(book);
        return book;
    }
    async update(book) {
        const index = this.books.findIndex(b => b.id === book.id);
        if (index !== -1) {
            this.books[index] = book;
        }
    }
    async delete(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
}
