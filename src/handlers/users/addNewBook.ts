import {Request, Response } from "express"
import {pool} from "../../helpers/db"

export function addNewBook(req:Request,res:Response){
    const bookData = req.body
    const userData = res.locals.userdata
    pool.getConnection(async (err,connection)=>{
        connection.query('SET AUTOCOMMIT=0;')
        connection.query('START TRANSACTION')
        try{
            connection.execute('INSERT IGNORE INTO authors (author_name) VALUES (?);', [bookData.authorName])
            connection.execute('INSERT IGNORE INTO books (book_name, author_name,category_name) VALUES (?, ?, ?);',
                                [bookData.bookName, bookData.authorName,bookData.categoryName])
            connection.execute('INSERT IGNORE INTO book_status (user_id,book_id,status) VALUES (?,last_insert_id(),?);', 
                                [userData.id, bookData.status])
            connection.query('COMMIT')
            connection.release()
            return res.send(JSON.stringify({"status":"New book added"}))
        }catch(e){
            connection.query('ROLLBACK')
            connection.release()
            return res.status(400).send(JSON.stringify({"status":"New book add failed"}))
        }
    })
}
