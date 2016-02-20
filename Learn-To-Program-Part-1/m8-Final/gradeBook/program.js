var book = require("./lib/grades").book;

// use express
var express = require("express");
var app = express();

// have app respond to GET request, / is root of site
app.get("/", function(req, res){
    res.send("Hello World");
});

app.get("/grade", function(req, res){
    
    // "1,2,3".split(",") => [1,2,3]
    var grades = req.query.grades.split(",");
    for ( var i=0; i < grades.length; i++){
        book.addGrade(parseInt(grades[i]));
    }
    
    var average = book.getAverage();
    var letter = book.getLetterGrade();
    
    res.send("Your average is " + average + " grade " + letter);
    
})

// have app listen on port 3000
app.listen(3000);
console.log("server ready...");
