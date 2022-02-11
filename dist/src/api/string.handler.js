"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHandler = void 0;
const nanoid_1 = require("nanoid");
const overflow_error_1 = require("./error/overflow.error");
class StringHandler {
    constructor() {
        console.log("Init String Class");
    }
    static getRandomString(req, res, len = 21) {
        const string = (0, nanoid_1.nanoid)(len);
        if (len > 21) {
            throw new overflow_error_1.OverflowError("Length too big");
        }
        res.send({
            string: `${string}`,
        });
    }
}
exports.StringHandler = StringHandler;
