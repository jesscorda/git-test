import { LoggedUser, RegisteredUser } from "../models";
import { HttpErrors } from "@loopback/rest";

export function checkPassword(logUser : LoggedUser, savedUser : RegisteredUser){
    if(logUser.password !== savedUser.password){
        throw new HttpErrors.UnprocessableEntity("Credentials are invalid");
    }
}