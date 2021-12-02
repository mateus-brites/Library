import { BooksRepository } from "../../repositories/BooksRepository";
import { Book } from "../../entities/Book";
import { AppError } from "../../../../errors/AppError";


class FindBookByNameUseCase {
    async execute(name: string): Promise<Book[]>{
        const booksRepository = new BooksRepository();

        const books = await booksRepository.findByName(name);

        if (!books) {
            throw new AppError("Book not found");
        }

        return books;
    }
}

export { FindBookByNameUseCase }