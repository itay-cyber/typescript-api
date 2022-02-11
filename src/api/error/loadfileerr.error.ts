export class LoadFileError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "LoadFileError"
    }
}