import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/interfaces/BookRepository";

export class InMemoryBookRepository implements BookRepository {
  private books: Book[] = [
    new Book("1", "Book Title 1", "Author Name 1", new Date("2024-01-01")),
    new Book("2", "Book Title 2", "Author Name 2", new Date("2024-02-01")),
    new Book("3", "Book Title 3", "Author Name 3", new Date("2024-03-01")),
  ];

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async findById(id: string): Promise<Book | null> {
    return this.books.find(book => book.id === id) || null;
  }

  async create(book: Book): Promise<Book> {
    this.books.push(book);
    return book;
  }

  async update(book: Book): Promise<void> {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    }
  }

  async delete(id: string): Promise<void> {
    this.books = this.books.filter(book => book.id !== id);
  }
}
