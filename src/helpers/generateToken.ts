import * as jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from './config'

export function generateToken(user: { id: number; name: string; email: string; }) {

const data =  {
    id: user.id,
    name: user.name,
    email: user.email
};
const signature = TOKEN_SECRET || "";
const expiration = '6h';

return jwt.sign({ data, }, signature, { expiresIn: expiration, });

}