const api = require("../../helpers/api");
import { Request, Response } from "express";

export async function status (req:Request, res:Response) {
    try {
        const worldTimeApiResult = await api.request({type: "GET", url: "http://worldtimeapi.org/api/timezone/Europe/Moscow"});
        
        const result = {
            message: "OK!",
            success: true,
            time: worldTimeApiResult,
        }

        return res.send(JSON.stringify(result))
    }
    catch (error) {
        if(error)
        {
            console.error(error)
        }
        return res.sendStatus(500)
    }
}

