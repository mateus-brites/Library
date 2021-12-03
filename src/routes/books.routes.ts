import { CreateBookController } from "../modules/books/useCases/CreateBook/CreateBookController";
import { Router } from "express";
import { FindBookByIdController } from "../modules/books/useCases/FindBookById/FindBookByIdController";
import { FindBookByNameController } from "@modules/books/useCases/FindBookByName/FIndBookByNameController";
import { DeleteBookController } from "@modules/books/useCases/DeleteBook/DeleteBookController";

const booksROuter = Router();

const createBookController = new CreateBookController()
const findBookByIdController = new FindBookByIdController();
const findBookByNameController = new FindBookByNameController()
const deleteBookController = new DeleteBookController();

booksROuter.post("/", createBookController.handle)
booksROuter.get("/findById/:id", findBookByIdController.handle)
booksROuter.get("/findByName", findBookByNameController.handle)
booksROuter.delete("/dell:id?", deleteBookController.handle)

export {booksROuter}