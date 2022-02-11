"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowError = void 0;
class OverflowError extends Error {
    constructor(message) {
        super(message);
        this.name = "OverflowError";
    }
}
exports.OverflowError = OverflowError;
