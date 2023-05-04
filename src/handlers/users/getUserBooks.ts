import {Request, Response } from "express"
import {pool} from "../../helpers/db"

export function getUserBooks(req:Request,res:Response){
    pool.promise()
    .execute('select u.username,b.category_name,b.author_name,b.book_name,bs.status \
              from library_db.book_status bs \
              natural join library_db.books b, library_db.users u \
              where bs.user_id = u.user_id and bs.book_id = b.book_id and u.user_id = ?', [res.locals.userdata.id])
    .then((result: any[]) => {
     console.log(result[0])
     return res.send(JSON.stringify(result[0]))
    })
}
