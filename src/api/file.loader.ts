import {Express, Request, Response} from "express"
import * as path from "path"
import {FileNotFoundError} from "./error/filenotfound.error"

export class FileLoader {
    constructor() {
        console.log("Init fileloader")
    }

    static load(req: Request, res: Response, filename: string) {
        try {
            if (filename) {
                res.sendFile(filename, {root: "./site"})

            }
            else {
                throw new FileNotFoundError("No such file exists")
            }
        } catch (error: any) {
            res.status(404).send({
                message: "Could not get file" + error.message
            })
        }
    }
}