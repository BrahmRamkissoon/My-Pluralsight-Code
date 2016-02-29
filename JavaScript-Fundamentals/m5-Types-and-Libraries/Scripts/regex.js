// update p element with results
function write(message) {
  document.getElementById('message').innerHTML += message + '<br/>';
}

function newParagraph(){
    write("")
}

// search -returns index of char found
var result = "abcde".search(/c/);
write("index of c in 'abcd': " + result);
newParagraph();

// exec - searches for a match in a specified string. Returns a result array, or null
var input = "Text with some <strong>highlighted</strong> parts.";
var expression = /<strong>(.*)<\/strong>/;
var results = expression.exec(input);
write("matched substring: " + results[0]);
write("first capture group: " + results[1]);
newParagraph();

// test - returns boolean whether there is a match or not
var containsANumber = /\d/.test("abc4de");
write("abc4de contains a number: " + containsANumber);
newParagraph();

// replace - replaces can be a string or a function
var updated = "Fred Brooks".replace(/(\w+) (\w+)/g, function (match, capture1, capture2){
    return capture2.toUpperCase() + ", " + capture1;
});
write(updated);