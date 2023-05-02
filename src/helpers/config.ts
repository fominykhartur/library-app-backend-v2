import {
    DEFAULT_DB_HOST,
    DEFAULT_DB_PORT,
    DEFAULT_DB_CONNECTION_LIMIT
} from "./constants"

const dotenv = require('dotenv')

dotenv.config()

interface IConfigDB {
    host: string
    port: number
    username: string
    password: string
    database: string
    connectionLimit: number
}

export const db : IConfigDB = {
    host: process.env.DB_HOST || DEFAULT_DB_HOST,
    port: +(process.env.DB_PORT || DEFAULT_DB_PORT),
    database: process.env.DB_DATABASE || "",
    username: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    connectionLimit: +(process.env.DB_CONNECTION_LIMIT || DEFAULT_DB_CONNECTION_LIMIT),
}

export const API_PORT = process.env.API_PORT

export const TOKEN_SECRET = process.env.TOKEN_SECRET