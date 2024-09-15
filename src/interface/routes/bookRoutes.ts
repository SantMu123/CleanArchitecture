import { Router } from "express";
import { InMemoryBookRepository } from "../../infrastructure/repositories/InMemoryBookRepository";
import { GetAllBooks } from "../../use-cases/GetAllBooks";
import { BookController } from "../controllers/BookController";
import { authenticateToken } from "../../infrastructure/middleware/auth";

const router = Router();

const bookRepository = new InMemoryBookRepository();
const getAllBooks = new GetAllBooks(bookRepository);
const bookController = new BookController(getAllBooks);

router.get("/books", (req, res) => bookController.getAll(req, res));
router.post("/books", authenticateToken, (req, res) => bookController.create(req, res));

export { router as bookRoutes };
