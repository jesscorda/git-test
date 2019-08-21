import { sign, verify } from "jsonwebtoken";
import { readFileSync } from "fs";
import { resolve } from "path";
import { LoggedUser } from "../models/logged-user.model";
const privateKEY = readFileSync(resolve('src/encryptionKeys/private.pem'), 'utf8');
const publicKEY = readFileSync(resolve('src/encryptionKeys/public.pem'), 'utf8');

export function generateJWT(user: LoggedUser) {
    const signOptions = {
        expiresIn: "2h",
        algorithm: "RS256"
    }
    const token = sign(user, privateKEY, signOptions);
    return token;
}

export async function verifyJWT(token: string) {
    const verifyOptions = {
        expiresIn: "2h",
        algorithms: ["RS256"]
    }
    verify(token, publicKEY, verifyOptions, function (err : Error, payload) {
        if(err){
            console.log(err.message)
        }else{
            console.log(payload);
            return payload;
        }
    });;
}