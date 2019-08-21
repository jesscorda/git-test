import { string, validate, ValidationResult, StringSchema, object } from "joi";

export class ValidationError extends Error{
    constructor(message : string){
        super(message)
        this.name = "Validation"
    }
}

export function validateObjectId(id : string){
    const schema : StringSchema = string().required().regex(/^[0-9a-fA-F]{24}$/)
    const result : ValidationResult<string> = validate(id, schema);
    if(result.error){
        throw new ValidationError("Invalid Error");
    }
}

export function validateRequestBody(request : Object){
    if(request !== undefined && Object.keys(request).length == 0){
        throw new ValidationError("Request cannot be empty");
    }
}