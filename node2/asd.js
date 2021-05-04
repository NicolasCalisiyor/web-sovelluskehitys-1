const mysql = require('mysql');

var config = {
    host: "localhost",
    user: "root",
    password: "Root42",
    database: "example_db"
};

function makeDb( config ) {
    const connection = mysql.createConnection( config );  return {
      query( sql, args ) {
        return util.promisify( connection.query )
          .call( connection, sql, args );
      },
      close() {
        return util.promisify( connection.end ).call( connection );
      }
    };
  }


function test () {
    const db = makeDb( config );
try {
  const someRows = await db.query( "SELECT * FROM location" );
  console.log(someRows);
} catch ( err ) {
    console.error(err)
} finally {
  await db.close();
}
}
/*
const test = await db.query( 'SELECT * FROM users WHERE id = 1' );

const getDB = async () => {
    try {
        con.connect = () =>{
            let result = con.query("SELECT * FROM location")
            console.log(result)
        }
    } catch (e) {
        console.log("error");
    }
}


module.exports = getDB;*/