const express = require('express');
const test = require('./asd')
const app = express();


app.get('/', function (req, res) {
    res.send('Hello World');
    test().then(res => console.log(res));
})

const server = app.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})