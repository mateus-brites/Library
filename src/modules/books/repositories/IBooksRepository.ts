import { Book } from "../entities/Book"


interface IBooksRepository {
    create(name: string): Promise<Book>
    delete(id: string): Promise<void>
    findById(id: string): Promise<Book>
    findByName(name: string): Promise<Book[]>
    rent(id: string): Promise<Book>
    replace(id: string): Promise<void>
}

export { IBooksRepository }