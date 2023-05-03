import {Request, Response, NextFunction } from "express"
import {TOKEN_SECRET} from "../helpers/config"
import * as jwt from 'jsonwebtoken'

export function isAuth(req:Request, res:Response, next:NextFunction) {
    console.log("middle test 0")
    if (!(req.headers.authorization && req.headers.authorization?.split(" ")[0]==="Bearer")){
       return res.status(400).send({"status":"Not authorized"})
    } 
    const Secret = TOKEN_SECRET || ""
    const Token = req.headers.authorization?.split(" ")[1] || ""
    jwt.verify(Token,Secret, (err,dec)=>{
        if(err){
            console.log("Wrong token")
            return res.status(403).send({"status":"wrong token"})
        }
        next()
    })
}