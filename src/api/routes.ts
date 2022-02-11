import {Express, Request, Response} from "express"
import { StringHandler } from "./string.handler"
import { FileLoader } from "./file.loader"
import {LoadFileError} from "./error/loadfileerr.error"
import {FileNotFoundError} from "./error/filenotfound.error"


function loadFiles(req: Request, res: Response, file: string) {
    switch(file) {
        case "home": case "index":
            FileLoader.load(req, res, "index.html")
            break
        case "javascript":
            FileLoader.load(req, res, "js/site.js")
            break    
        default:
            throw new LoadFileError(`Could not load file ${file}`)
        }
}
function getRandomString(req: Request, res: Response, len: number) {

}

export default function(app: Express) {

    app.get("/api/random/healthcheck", (req: Request, res: Response) => res.sendStatus(200))
    app.get("/api/random/:len", (req: Request, res: Response) => getRandomString(req, res, Number.parseInt(req.params["len"])))

    app.get("/", (req: Request, res: Response) => loadFiles(req, res, "home"))
    app.get("/js/site.js", (req: Request, res: Response) => loadFiles(req, res, "javascript"))
}