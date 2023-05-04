import {Request, Response, NextFunction } from "express"
import {pool} from "../helpers/db"
import {decode} from 'jsonwebtoken'

export function attachCurrentUser (req:Request, res:Response, next:NextFunction) {
    console.log("middle test")
    const Token = req.headers.authorization?.split(" ")[1] || ""
    const decodedData = JSON.parse(JSON.stringify(decode(Token))) 
    console.log(decodedData)
    res.locals.userdata = decodedData.data
    console.log(res.locals.userdata)

    // pool.promise().execute("select user_id,username,email from users where username = ?", [decodedData.username])


    next()
   }