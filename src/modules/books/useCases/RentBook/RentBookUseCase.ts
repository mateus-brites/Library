import { AppError } from "@/errors/AppError";
import { Book } from "@modules/books/entities/Book";
import { BooksRepository } from "@modules/books/repositories/BooksRepository";



class RentBookUseCase {
    async execute(id: string): Promise<Book> {
        const booksRepository = new BooksRepository();

        const findBookById = await booksRepository.findById(id);

        if (!findBookById) {
            throw new AppError("Book id not found");
        }

        if(findBookById.available === false){
            throw new AppError("This book is not available", 401);
        }

        const book = await booksRepository.rent(id);

        if (!book) {
            throw new AppError("Error", 500);
        }

        return book;
    }
}

export { RentBookUseCase };