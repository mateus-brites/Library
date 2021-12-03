import { BooksRepository } from "../../repositories/BooksRepository";
import { Book } from "../../entities/Book";
import { AppError } from "../../../../errors/AppError";


class FindBookByNameUseCase {
    async execute(name: string): Promise<Book[]>{
        const booksRepository = new BooksRepository();

        const books = await booksRepository.findByName(name);

        console.log(books);

        return books;
    }
}

export { FindBookByNameUseCase }