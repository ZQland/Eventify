import { CustomError } from "./custom-error";

// using CustomError to make sure that each specific error is how it intended
export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor() {
    super('Error connecting to db');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  // by implementing abstract class, I caught the typo I made on serializeErros
  serializeErrors() {
    return [
      { message: this.reason }
    ]
  }
}