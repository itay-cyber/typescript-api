"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadFileError = void 0;
class LoadFileError extends Error {
    constructor(message) {
        super(message);
        this.name = "LoadFileError";
    }
}
exports.LoadFileError = LoadFileError;
