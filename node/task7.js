var express = require('express');
const cors = require('cors')
var app = express();
app.use(cors());
var mysql = require('mysql');


const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root42",
    database: "example_db"
});

var url = require('url');

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

var util = require('util'); // for async calls
// node native promisify
const query = util.promisify(conn.query).bind(conn); // is bind needed?

// parametrien kirjoitustapa selaimessa : http://localhost:8080/api/events?start=2021-01-01&end=2021-11-29
app.get("/api/events", function (req, res) {
    console.log("Get events from a certain period");
    var q = url.parse(req.url, true).query;
    var params = q.start + " " + q.end;
    var startDate = q.start;
    var endDate = q.end;
    var string;
    //res.send("Getting events: "+params);

    var sql = "SELECT event_date.Date, event.Name, event.Type, Location.Location_name"
        + " FROM event_date, event, location"
        + " WHERE event_date.Event_id = event.Event_id and event.Location_Location_id = Location.Location_id"
        + " and event_date.Date >= ? and event_date.Date <= ?"
        + " GROUP BY Name"
        + " ORDER BY event_date.Date";

    (async () => { // IIFE (Immediately Invoked Function Expression)
        try {
            const rows = await query(sql,[startDate, endDate]);
            string = JSON.stringify(rows);
            console.log(string);
            res.send(string);
        }
        catch (err) {
            console.log("Database error!"+ err);
        }
        finally {
            //conn.end();
        }
    })()
});


app.listen(3000)