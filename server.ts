import express from "express";
import routes from "./src/api/routes";

const PORT = 8080

const app = express()



app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static("site"))

app.listen(PORT, "localhost", () => {
    console.log("Server listening at localhost:8080")

    routes(app)
})