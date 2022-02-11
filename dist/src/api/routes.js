"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_handler_1 = require("./string.handler");
const file_loader_1 = require("./file.loader");
const loadfileerr_error_1 = require("./error/loadfileerr.error");
function loadFiles(req, res, file) {
    switch (file) {
        case "home":
        case "index":
            file_loader_1.FileLoader.load(req, res, "index.html");
            break;
        case "javascript":
            file_loader_1.FileLoader.load(req, res, "js/site.js");
            break;
        default:
            throw new loadfileerr_error_1.LoadFileError(`Could not load file ${file}`);
    }
}
function default_1(app) {
    app.get("/api/random/healthcheck", (req, res) => res.sendStatus(200));
    app.get("/api/random/:len", (req, res) => string_handler_1.StringHandler.getRandomString(req, res, Number.parseInt(req.params["len"])));
    app.get("/", (req, res) => loadFiles(req, res, "home"));
    app.get("/js/site.js", (req, res) => loadFiles(req, res, "javascript"));
}
exports.default = default_1;
