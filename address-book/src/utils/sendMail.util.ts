import { createTransport } from "nodemailer";
import { mailServerConfig } from "../properties";
import { createLinkToken } from "./linkToken.util";

export async function sendMail(email: string, firstName: string) {
    const transport = createTransport({
        host: mailServerConfig.host,
        port: mailServerConfig.port,
        auth: {
            user: mailServerConfig.user,
            pass: mailServerConfig.pass
        }
    })

    const linkToken = await createLinkToken(email);

    const emailObj = {
        from: mailServerConfig.user,
        to: email,
        subject: "Registration Confirmation",
        html: "Hello " + firstName + ",<br><br><br> Please click on the link to verify your email.<br><a href=" + linkToken + ">Click here to verify</a>"
    }
    try {
        const info = await transport.sendMail(emailObj);
        transport.close();
        return info;
    } catch (error) {
        transport.close();
        throw error;
    }

}