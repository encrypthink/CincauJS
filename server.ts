import express from "express";
import bodyParser from "body-parser";
import connection, { prisma } from "./config/databases";
import { route } from "./routes/api";
import { host, port } from "./config/app";

connection()

async function main() {
    const server = express();

    
    server.listen(port, () => { console.log("🟢 Server running at " + host + port + ", Let's take of 🛫") });
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use('/', route);
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
