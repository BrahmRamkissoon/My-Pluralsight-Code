// update p element with results
function write(message) {
  document.getElementById('message').innerHTML += message + '<br/>';
}

function newParagraph(){
    write("")
}


// load json2.js -- JSON should be already included?

// eval can be used to parse JSON
var input = '{"books":[{"title":"Frankenstein","author":"Mary Shelley"}]}';
eval("var data = " + input);
write("parsed with eval: " + data.books[0].title + " by " + data.books[0].author);
newParagraph();


var withJson2 = JSON.parse(input);
write("parsed with json2: " + withJson2.books[0].title + " by " + withJson2.books[0].author);
newParagraph();

write("JSON.stringify(): " + JSON.stringify(withJson2));
