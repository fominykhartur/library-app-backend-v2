import { Request, Response } from "express";
import { pool } from "../../helpers/db";

export function getUsername(req: Request, res: Response) {
    try {
        pool.promise()
            .execute("select user_id, username from users where user_id = ?", [
                req.body.id,
            ])
            .then((result: any[]) => {
                console.log(result[0]);
                return res.send(JSON.stringify(result[0]));
            });
    } catch (e) {
        console.log(e);
        return res.send(JSON.stringify({ status: "user not found" }));
    }
}
