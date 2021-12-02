import { CreateBookController } from "../modules/books/useCases/CreateBook/CreateBookController";
import { Router } from "express";
import { FindBookByIdController } from "../modules/books/useCases/FindBookById/FindBookByIdController";
import { FindBookByNameController } from "../modules/books/useCases/FindBookByName/FIndBookByNameController";

const booksROuter = Router();

const createBookController = new CreateBookController()
const findBookByIdController = new FindBookByIdController();
const findBookByNameController = new FindBookByNameController()
booksROuter.post("/", createBookController.handle)
booksROuter.get("/:id", findBookByIdController.handle)
booksROuter.post("/find", findBookByNameController.handle)

export {booksROuter}