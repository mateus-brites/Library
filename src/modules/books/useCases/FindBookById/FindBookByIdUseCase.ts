import { AppError } from "../../../../errors/AppError";
import { Book } from "../../entities/Book";
import { BooksRepository } from "../../repositories/BooksRepository";

class FindBookByIdUseCase {
    async execute(id: string): Promise<Book>{
        const booksRepository = new BooksRepository();

        const book = await booksRepository.findById(id);

        if(!book){
            throw new AppError("This id does not exist!");
        }

        return book;
    }
}

export {FindBookByIdUseCase}