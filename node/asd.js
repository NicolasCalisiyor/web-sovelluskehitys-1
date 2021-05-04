var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root42",
    database: "example_db"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM location", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        test = JSON.stringify(result)
    });
});