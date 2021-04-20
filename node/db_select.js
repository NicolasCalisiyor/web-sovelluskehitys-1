var mysql = require('mysql');

export const db_connect = () => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword",
        database: "example_db"
    });

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM event", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
}
