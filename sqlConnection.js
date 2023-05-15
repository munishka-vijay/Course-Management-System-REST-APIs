const mysql  = require('mysql');

let db_con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sql@123",
    database: "nodejs_courses_restapi"
});

db_con.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("Connected to Database");
    }
});
  
module.exports = db_con;