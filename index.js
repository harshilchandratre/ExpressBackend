const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send("<h1>Welcome Harshil 😅</h1>")
})


app.listen(process.env.PORT, () => {
    console.log(`server is on ${process.env.PORT}`)
})

