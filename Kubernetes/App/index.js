const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan("combined"))

app.get('/', (req, res) =>{
    res.send("Welcome to main page.")
})

app.get('/frontend', (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000, () =>{console.log("Server up.")})