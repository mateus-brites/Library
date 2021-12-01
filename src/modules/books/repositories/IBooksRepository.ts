import { Book } from "../entities/Book"


interface IBooksRepository {
    create(name: string): Promise<Book>
    delete(id: string): Promise<void>
    find(id: string): Promise<Book>
    update(id: string): Promise<Book>
    findByCategory(category: string): Promise<Book>
}

export { IBooksRepository }