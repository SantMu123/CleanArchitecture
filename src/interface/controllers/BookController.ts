import { Request, Response } from "express";
import { validate } from "class-validator";
import { CreateBookDto } from "../dto/CreateBookDto";
import { GetAllBooks } from "../../use-cases/GetAllBooks";

export class BookController {
  constructor(private getAllBooks: GetAllBooks) {}

  async getAll(req: Request, res: Response) {
    try {
      const books = await this.getAllBooks.execute();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async create(req: Request, res: Response) {
    const dto = Object.assign(new CreateBookDto(), req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Aquí puedes implementar la lógica para crear un libro
    // Por ejemplo, podrías tener otro UseCase para manejar la creación
    // En este ejemplo solo retornamos un mensaje de éxito

    res.status(201).json({ message: "Book created successfully" });
  }
}
