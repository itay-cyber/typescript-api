"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLoader = void 0;
const filenotfound_error_1 = require("./error/filenotfound.error");
class FileLoader {
    constructor() {
        console.log("Init fileloader");
    }
    static load(req, res, filename) {
        try {
            if (filename) {
                res.sendFile(filename, { root: "./site" });
            }
            else {
                throw new filenotfound_error_1.FileNotFoundError("No such file exists");
            }
        }
        catch (error) {
            res.status(404).send({
                message: "Could not get file" + error.message
            });
        }
    }
}
exports.FileLoader = FileLoader;
