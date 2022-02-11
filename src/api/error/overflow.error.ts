export class OverflowError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "OverflowError"
    }
}