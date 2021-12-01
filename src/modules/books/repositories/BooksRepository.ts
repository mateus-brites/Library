import { Client, Query } from "pg";
import { v4 } from "uuid";

import { EntityRepository } from "typeorm";
import { Book } from "../entities/Book";
import { IBooksRepository } from "./IBooksRepository"



@EntityRepository(Book)
class BooksRepository implements IBooksRepository {
    findByName(name: string): Promise<Book> {
        throw new Error("Method not implemented.");
    }
    async create(name: string): Promise<Book> {
        const client = new Client({
            user: "postgres",
            password: "postgres",
            host: "localhost",
            port: 5432,
            database: "library"
        })
        await client.connect()

        const text = 'INSERT INTO book(id, name) VALUES($1, $2) RETURNING *'

        client.query(text, [v4(), name], (err, res) => {
            if (err) {
                console.log(err.stack)
              } else {
                console.log(res.rows[0])
                return res
              }
        })
        

        return;
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async findById(id: string): Promise<Book> {
        const client = new Client({
            user: "postgres",
            password: "postgres",
            host: "localhost",
            port: 5432,
            database: "library"
        })

        await client.connect()

        const text = 'SELECT * FROM book WHERE book.id = $1'

        const value = [id]

        try {
            const { rows } = await client.query(text, value)
            const book = rows[0]

            return book as Book

        } catch(err) {
            return
        }


        
    }
    update(id: string): Promise<Book> {
        throw new Error("Method not implemented.");
    }
    findByCategory(category: string): Promise<Book> {
        throw new Error("Method not implemented.");
    }
}

export { BooksRepository }