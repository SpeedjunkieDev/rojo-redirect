const express = require('express')
const request = require('request')

const app = express()

app.get("*", (req, res) => {
    var redirect = `http://127.0.0.1:34872${req.url}`;
    request.get(redirect).on('data', (e) => {
        res.end(e.toString("utf-8"))
    })
})

app.listen(8080)