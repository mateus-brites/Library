import { BooksRepository } from "../../repositories/BooksRepository";


class CreateBookUseCase {
    async execute(name: string) {
        const booksRepository = new BooksRepository()

        await booksRepository.create(name);
    }
}

export { CreateBookUseCase }