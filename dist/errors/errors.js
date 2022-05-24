/**
 * WotoError is the base error for all errors
 * being thrown by this library.
 */
export class WotoError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
