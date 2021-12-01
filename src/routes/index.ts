import { Router } from "express"
import {booksROuter} from "./books.routes";

const router = Router()

router.use("/books",booksROuter)

export { router };