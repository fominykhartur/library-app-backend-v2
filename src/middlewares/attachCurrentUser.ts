import {Request, Response, NextFunction } from "express"
import {pool} from "../helpers/db"
import {decode} from 'jsonwebtoken'

export function attachCurrentUser (req:Request, res:Response, next:NextFunction) {
    console.log("middle test")
    const Token = req.headers.authorization?.split(" ")[1] || ""
    const decodedData = JSON.parse(JSON.stringify(decode(Token))) 
    console.log(decodedData)

    // pool.promise().execute("select user_id,username,email from users where username = ?", [decodedData.username])
    // const decodedTokenData = req.body.tokenData;
    // const userRecord = await UserModel.findOne({ _id: decodedTokenData._id })
   
    // //  req.currentUser = userRecord;
   
    // if(!userRecord) {
    //   return res.status(401).end('User not found')
    // } else {
    //   return next();
    // console.log(req)
    // console.log(req.headers.authorization)

    next()
   }