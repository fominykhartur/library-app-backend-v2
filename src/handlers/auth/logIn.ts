import {Request, Response } from "express"
import {pool} from "../../helpers/db"
import * as argon2 from "argon2";
import {generateToken} from "../../helpers/generateToken"

export async function logIn(req:Request,res:Response){
    console.log(req.body)

    pool.promise().execute('select * from users where email = ?', [req.body.email])
    .then(async (result: any[]) => {
     console.log(result[0])
     if (result[0].length != 1){
        return res.status(400).send(JSON.stringify({"res":"wrong mail"}))
     }

     if(await argon2.verify(result[0][0].password, req.body.password)){
        const jwt = generateToken({
            id: result[0][0].user_id,
            name: result[0][0].username,
            email: result[0][0].email
        })
        return res.send(JSON.stringify({res:"succes",
                                        name: result[0][0].username,
                                        jwt:jwt}))
     }else{
        return res.status(400).send(JSON.stringify({"res":"wrong password"}))
     }
    })
}

