import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
export class DatabaseConnectionError extends CustomError {
  reason = 'Error connection to database ';
  statusCode = 500;

  constructor() {
    super('Error Connection to DB');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
