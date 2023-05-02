import {Request, Response } from "express"
import {pool} from "../../helpers/db"

export function test(req:Request,res:Response){
    console.log(req.query.user_id)
    pool.promise().execute('select * from users')
    .then((result: any[]) => {
     console.log(result[0])
     return res.send(JSON.stringify(result[0]))
    })
}
