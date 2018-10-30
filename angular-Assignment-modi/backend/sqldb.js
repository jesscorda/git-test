var mysql = require('mysql');
var database="backend";

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "backend"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Mysql Connected!");
  });

  module.exports=this.con;