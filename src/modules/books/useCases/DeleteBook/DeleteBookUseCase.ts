import { AppError } from "@/errors/AppError";
import { BooksRepository } from "@modules/books/repositories/BooksRepository"


class DeleteBookUseCase {
    async execute(id: string): Promise<void> {
        const booksRepository = new BooksRepository();
        const book = await booksRepository.findById(id);

        if(!book) {
            throw new AppError("id not found");
        }

        await booksRepository.delete(id);

        return
    }
}

export { DeleteBookUseCase };