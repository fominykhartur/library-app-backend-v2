import {Request, Response } from "express"
import {pool} from "../../helpers/db"

export function changeBookStatus(req:Request,res:Response){
    const bookData = req.body
    try{
        pool.promise().execute('update book_status set status = ? where id = ? and user_id = ?', [bookData.status, bookData.id, res.locals.userdata.id])
        .then((result: any[]) => {
            console.log(result[0])
            if (result[0].affectedRows > 0){
                return res.send(JSON.stringify({status:"Book status changed"}))
            }else{
                return res.status(400).send(JSON.stringify({status:"Book status change failed"}))
            }
        })
    }catch(e){
        console.log(e)
        return res.status(400).send(JSON.stringify({status:"Book status change failed"}))
    }
}
