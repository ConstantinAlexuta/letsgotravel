var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "RootPassword263*@#051581541dsadsa" 
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});