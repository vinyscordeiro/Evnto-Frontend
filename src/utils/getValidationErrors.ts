import { ValidationError } from 'yup';

interface Errors {
    [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
    const validationErrors: Errors = {} as Errors;

        if(err.inner.length >= 1 ){
            err.inner.forEach(error => {
                if(error.path){
                    validationErrors[error.path] = error.message;  
                };  
            });
        }
        
    return validationErrors;
}