import { CreateBookController } from "../modules/books/useCases/CreateBook/CreateBookController";
import { Router } from "express";

const booksROuter = Router();

const createBookController = new CreateBookController()

booksROuter.post("/", createBookController.handle)

export {booksROuter}