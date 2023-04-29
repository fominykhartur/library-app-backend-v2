import {Request, Response } from "express"
import {pool} from "../../helpers/db"

export function test(req:Request,res:Response){
    pool.execute('select user_id,username from users')
    .then((result: any[]) => {
     console.log(result[0])
     return res.send(JSON.stringify(result[0]))
    })
}