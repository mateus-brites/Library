import {Pool, Client, Query } from "pg";
import { v4 } from "uuid";

import { EntityRepository } from "typeorm";
import { Book } from "../entities/Book";
import { IBooksRepository } from "./IBooksRepository"


@EntityRepository(Book)
class BooksRepository implements IBooksRepository {
    
    async findByName(name: string): Promise<Book[]> {
        
        const clientpg = new Client({
            user: "postgres",
            password: "postgres",
            host: "localhost",
            port: 5432,
            database: "library"
        })

        await clientpg.connect();

        const text = 'SELECT * FROM book WHERE book.name = $1'
        try {
            const {rows: books} = await clientpg.query(text, [name])
            await clientpg
                .end()
                .then(() => console.log("client has disconnected"))
            return books
        } catch {
            return;
        }
        
    }
    async create(name: string): Promise<Book> {
        const clientpg = new Client({
            user: "postgres",
            password: "postgres",
            host: "localhost",
            port: 5432,
            database: "library"
        })
        await clientpg.connect()

        const text = 'INSERT INTO book(id, name) VALUES($1, $2) RETURNING *'

        clientpg.query(text, [v4(), name], (err, res) => {
            if (err) {
                console.log(err.stack)
              } else {
                console.log(res.rows[0])
                return res
              }
        })
        await clientpg
                .end()
                .then(() => console.log("client has disconnected"))

        return;
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async findById(id: string): Promise<Book> {
        const clientpg = new Client({
            user: "postgres",
            password: "postgres",
            host: "localhost",
            port: 5432,
            database: "library"
        })
        await clientpg.connect()

        const text = 'SELECT * FROM book WHERE book.id = $1'

        const value = [id]

        try {
            const { rows } = await clientpg.query(text, value);
            const book = rows[0]

            await clientpg
                .end()
                .then(() => console.log("client has disconnected"))

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