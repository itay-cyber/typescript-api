"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHandler = void 0;
const nanoid_1 = require("nanoid");
class StringHandler {
    constructor() {
        console.log("Init String Class");
    }
    static getRandomString(req, res, len = 21) {
        const string = (0, nanoid_1.nanoid)(len);
        if (len > 21) {
            res.status(418).send({ message: "Length is above maximum length" });
        }
        res.send({
            string: `${string}`,
        });
    }
}
exports.StringHandler = StringHandler;
