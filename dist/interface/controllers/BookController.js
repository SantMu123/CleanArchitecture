import { validate } from "class-validator";
import { CreateBookDto } from "../dto/CreateBookDto";
import { DIContainer } from "../../infrastructure/DIContainer";
export class BookController {
    constructor() {
        this.getAllBooks = DIContainer.getGetAllBooksUseCase();
    }
    async create(req, res) {
        const dto = Object.assign(new CreateBookDto(), req.body);
        const errors = await validate(dto);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }
        // Proceed with the creation logic...
    }
}
