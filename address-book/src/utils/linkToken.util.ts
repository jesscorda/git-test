const Cryptr = require('cryptr');
import { SECRET } from "../properties";
import { HttpErrors } from "@loopback/rest";
const crypt = new Cryptr(SECRET);

export async function createLinkToken(email: string) {
    try {
        const encryptedString = await crypt.encrypt(email);
        const linkToken = "http://localhost:3000/verify/" + encryptedString;
        return linkToken;
    } catch (error) {
        throw error;
    }
}

export function verifyLinkToken(linkToken: string) {
    try {
        const decryptedString = crypt.decrypt(linkToken);
        return decryptedString;
    } catch (error) {
        throw error;
    }
}

export function checkLinkExpiry(linkTokenCreation: string) {
    const dateNow = new Date();
    const dateofLink = new Date(linkTokenCreation);
    const timeElaspsed = (dateNow.getTime() - dateofLink.getTime()) / 1000;
    if(timeElaspsed > 86400){
        return false;
    }else{
        return true;
    }
}