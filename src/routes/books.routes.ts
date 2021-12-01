import { CreateBookController } from "../modules/books/useCases/CreateBook/CreateBookController";
import { Router } from "express";
import { FindBookByIdController } from "../modules/books/useCases/FindBookById/FindBookByIdController";

const booksROuter = Router();

const createBookController = new CreateBookController()
const findBookByIdController = new FindBookByIdController

booksROuter.post("/", createBookController.handle)
booksROuter.get("/:id", findBookByIdController.handle)

export {booksROuter}