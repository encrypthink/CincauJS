import express from "express";
import connection, { prisma } from "./config/databases";
import { route } from "./routes/api";
import { host, port } from "./config/app";

connection()

async function main() {
    const server = express();

 
    server.listen(port, () => { console.log("🟢 Server running at " + host + port + ", Let's take of 🛫") });
    server.use('/', route);

    // const user = await prisma.user.create({
    //   data: {
    //     name: 'John Does',
    //     email: 'johndoe@gmail.com',
    //   },
    // });
    // console.log(JSON.stringify(user, undefined, 2));
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
