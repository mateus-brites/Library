import { Client } from "pg";


const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "library"
})

client.connect();

client.query('SELECT $1::text as message', ['Hello word'])
.then((res) => {
    console.log(res.rows[0].message)
    client.end()
    }
)