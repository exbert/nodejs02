const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Hello World from Express")
})

app.get("/about", (req, res) => {
    res.status(200).send("Hello World from About Page")
})

app.get("/contact", (req, res) => {
    res.status(200).send("Hello World from Contact Page")
})

app.get("*", (req, res) => {
    res.status(404).send("404 Page Not Found")
})

const port = 3000

app.listen(port, () => {
    console.log(`Service started with port ${port}`)
})

