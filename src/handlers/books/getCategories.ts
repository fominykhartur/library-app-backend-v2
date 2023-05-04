import {Request, Response } from "express"
import {pool} from "../../helpers/db"

export function getCategories(req:Request,res:Response){
    console.log(req.headers)
    pool.promise().execute('select * from categories')
    .then((result: any[]) => {
     console.log(result[0])
     console.log(res.locals.userdata)
     return res.send(JSON.stringify(result[0]))
    })
}

