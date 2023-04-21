import { CustomError } from "./custom-error";

// any sort of error handling can be done by defining a new error and extends to customerror
export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Route not found');
    
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() { return [{message: 'Not Found'}];
      
  }
}