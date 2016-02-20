var book = require("./lib/grades").book;

book.addGrade(90);
book.addGrade(85);
book.addGrade(72);

console.log(book.getAverage());

book.reset();

// Scott's modified solution  
for (var i=0; i < process.argv.length; i++){
    book.addGrade(parseInt(process.argv[i]));
}

console.log(book.getAverage());