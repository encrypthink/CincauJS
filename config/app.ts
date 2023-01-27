const dotenv = require("dotenv");
dotenv.config();

const env = process.env

const host = env.APP_HOST
const port = env.APP_PORT

export {
    host,
    port
}
