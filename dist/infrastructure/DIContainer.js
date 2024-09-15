import { MongoBookRepository } from "./repositories/MongoBookRepository";
import { GetAllBooks } from "../use-cases/GetAllBooks";
class DIContainer {
    static getBookRepository() {
        return this._bookRepository;
    }
    static getGetAllBooksUseCase() {
        return new GetAllBooks(this.getBookRepository());
    }
}
DIContainer._bookRepository = new MongoBookRepository();
export { DIContainer };
