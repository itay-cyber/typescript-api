import {Express, Request, Response} from "express"
import { nanoid } from "nanoid";

export class StringHandler {
    
    constructor() {
        console.log("Init String Class")
    }

    static getRandomString(req: Request, res: Response, len: number = 21) {
        const string = nanoid(len);
        
        if (len > 21) {
            res.status(418).send({ message: "Length is above maximum length"})

        }

        res.send({
            string: `${string}`,
        })

    }
}