import {Request, Response } from "express"
import {pool} from "../../helpers/db"

export function getUserList(req:Request,res:Response){
    console.log(req.headers)
    pool.promise().execute('select user_id,username from users')
    .then((result: any[]) => {
     console.log(result[0])
     return res.send(JSON.stringify(result[0]))
    })
}
