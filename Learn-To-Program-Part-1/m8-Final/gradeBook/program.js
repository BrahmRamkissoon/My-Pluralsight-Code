var book = require("./lib/grades").book;

// use express
var express = require("express");
var app = express();

// have app listen on port 3000
app.listen(3000);
console.log("server ready...");
