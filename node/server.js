var express = require('express');
var app = express();
var mysql = require('mysql');
var test = "";

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Root42",
        database: "example_db"
    });
    (async () => {

        try {
            con.connect();
            const someRows = await con.query( ' SELECT * FROM location');
            console.log(someRows);
        }catch (err) {
            //handle error
        }finally {
            con.end();
        }

    })()
/*
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM location", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            test = JSON.stringify(result)
        });
    });
*/
app.get('/', function (req, res) {
    res.send(test);
})



app.listen(3000)