import {Express, Request, Response} from "express"
import { nanoid } from "nanoid";
import { OverflowError } from "./error/overflow.error";

export class StringHandler {
    
    constructor() {
        console.log("Init String Class")
    }

    static getRandomString(req: Request, res: Response, len: number = 21) {
        const string = nanoid(len);
        
        if (len > 21) {
            
            throw new OverflowError("Length too big")

        }

        res.send({
            string: `${string}`,
        })

    }
}