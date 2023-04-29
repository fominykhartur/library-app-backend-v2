const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')

const { API_PREFIX } = require("./helpers/constants")

const PORT = process.env.API_PORT || 9000

dotenv.config()

const app = express();

app.use(bodyparser.json())
app.response.sendStatus = function(statusCode: number, message = "Something went wrong :(") {
    let response = {
        message: message,
        success: false
    }

    if (statusCode === 200) {
        response.success = true
	response.message = "OK!"
    }

    return this.status(statusCode).send(JSON.stringify(response))
}

// import {router} from "./routes/route_api"
// app.use(API_PREFIX, router)
app.use(API_PREFIX, require("./routes/route_api"))


async function startServer() {
    return new Promise((resolve, reject) => {
        const Service = app.listen(PORT, async (server:any) => {
            console.log(`API service is listening on port ${PORT}`);
            console.log(`API prefix : ${API_PREFIX}`)

            resolve(server)
        })
    })
}

export async function start(): Promise<any> {
    await startServer();
}

