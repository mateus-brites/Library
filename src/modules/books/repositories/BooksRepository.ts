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
    async delete(id: string): Promise<void> {
        const clientpg = new Client({
            user: "postgres",
            password: "postgres",
            host: "localhost",
            port: 5432,
            database: "library"
        })
        await clientpg.connect()

        const text = "DELETE FROM book WHERE book.id = $1"

        try {
            await clientpg.query(text, [id]);

            await clientpg
                .end()
                .then(() => console.log("client has disconnected"))
            return
        } catch {
            return
        }
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
    async rent(id: string): Promise<Book> {
        const clientpg = new Client({
            user: "postgres",
            password: "postgres",
            host: "localhost",
            port: 5432,
            database: "library"
        })
        await clientpg.connect()

        const text = "UPDATE book SET available = false WHERE book.id = $1"

        try {
            await clientpg.query(text, [id]);

            await clientpg
                .end()
                .then(() => console.log("client has disconnected"))

            const book = this.findById(id);

            return book;
            
        } catch(err) {
            console.log(err);
            return
        }
    }

    async replace(id: string): Promise<void> {
        const clientpg = new Client({
            user: "postgres",
            password: "postgres",
            host: "localhost",
            port: 5432,
            database: "library"
        })
        await clientpg.connect()

        const text = "UPDATE book SET available = true WHERE book.id = $1"

        try {
            await clientpg.query(text, [id]);

            await clientpg
                .end()
                .then(() => console.log("client has disconnected"))

            return;
            
        } catch(err) {
            console.log(err);
            return
        }
    }

    
}

export { BooksRepository }