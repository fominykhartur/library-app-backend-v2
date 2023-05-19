import {Request, Response } from "express"
import {pool} from "../../helpers/db"

export function getUserCategories(req:Request,res:Response){
    pool.promise()
    .execute('select distinct b.category_name\
              from book_status bs\
              natural join books b, users u\
              where bs.user_id = u.user_id and bs.book_id = b.book_id and u.user_id = ?', [req.body.id])
    .then((result: any[]) => {
     console.log(result[0])
     return res.send(JSON.stringify(result[0]))
    })
}
