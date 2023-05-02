import {Request, Response } from "express"
import {pool} from "../../helpers/db"

export function getCategories(req:Request,res:Response){
    pool.promise().execute('select * from categories')
    .then((result: any[]) => {
     console.log(result[0])
     return res.send(JSON.stringify(result[0]))
    })
}

