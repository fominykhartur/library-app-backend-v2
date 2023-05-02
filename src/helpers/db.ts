import { createPool } from "mysql2";
import * as config from "../helpers/config"
  
export const pool = createPool({
    host: config.db.host,
    port: config.db.port,
    database: config.db.database,
    user: config.db.username,
    password: config.db.password,
    connectionLimit: config.db.connectionLimit,
    waitForConnections: true,
    enableKeepAlive: true,
})