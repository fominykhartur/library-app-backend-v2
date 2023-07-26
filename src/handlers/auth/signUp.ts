import { Request, Response } from "express";
import { pool } from "../../helpers/db";
import * as argon2 from "argon2";

export function signUp(req: Request, res: Response) {
    console.log(req.body);
    pool.promise()
        .execute("select * from users where email = ?", [req.body.email])
        .then(async (result: any[]) => {
            console.log(result[0][0]);
            if (result[0].length >= 1) {
                return res
                    .status(400)
                    .send(JSON.stringify({ res: "email is busy" }));
            } else {
                const hashedPassword = await argon2.hash(req.body.password);

                pool.promise()
                    .execute(
                        "insert into users (username,password,email) values (?, ?, ?)",
                        [req.body.username, hashedPassword, req.body.email]
                    )
                    .then((result: any) => {
                        console.log(result);
                        return res.send(
                            JSON.stringify({ res: "new user registered" })
                        );
                    });
            }
        });
}
