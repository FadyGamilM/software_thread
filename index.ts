import express from "express"

const app = express()
app.use(express.json())

app.post("/threads/new", (req, res, next) => {
    console.log("hello")
    return res.status(200).json(req.body)
})

app.get("/", (req, res, next) => {
    res.json("hello")
})

let PORT = 5000
app.listen("5000", () => {
    console.log(`app is running on port ${PORT}`)
})

