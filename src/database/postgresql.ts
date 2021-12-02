import { Client } from "pg";


const clientpg = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "library"
})
//clientpg.connect()
export { clientpg }