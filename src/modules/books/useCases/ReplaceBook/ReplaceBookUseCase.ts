import { AppError } from "@/errors/AppError";
import { BooksRepository } from "@modules/books/repositories/BooksRepository";



class ReplaceBookUseCase {
    async execute(id: string): Promise<void> {
        const booksRepository = new BooksRepository()

        const book = await booksRepository.findById(id);

        if(!book) {
            throw new AppError("id not found");
        }

        if(book.available === false){
            throw new AppError("This book is not replaced", 401);
        }

        await booksRepository.replace(id)

        return;
    }
}

export { ReplaceBookUseCase };