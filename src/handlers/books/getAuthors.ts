import { Request, Response } from "express";
import { pool } from "../../helpers/db";

export function getAuthors(req: Request, res: Response) {
    console.log(req.headers);
    pool.promise()
        .execute("select * from authors")
        .then((result: any[]) => {
            console.log(result[0]);
            return res.send(JSON.stringify(result[0]));
        });
}
