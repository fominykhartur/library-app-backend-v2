import { createPool } from "mysql2";
  
export const pool = createPool({
    host: "localhost",//config.db.host,
    port: 3306,//config.db.port,
    database: "library_db",//config.db.database,
    user: "root",//config.db.username,
    password: "root",//config.db.password,
    //connectionLimit: config.db.connectionLimit,
    waitForConnections: true,
    enableKeepAlive: true
}).promise()