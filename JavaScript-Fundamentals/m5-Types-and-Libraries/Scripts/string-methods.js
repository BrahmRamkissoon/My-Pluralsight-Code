// update p element with results
function write(message) {
  document.getElementById('message').innerHTML += message + '<br/>';
}


function newParagraph(){
    write("")
}

// charAt
var character = "abcd".charAt(2);
write("Third character in 'abcd' is: " + character);
write("Type of character is: " + typeof character);
newParagraph();

// indexOf
var index = "abcd".indexOf("c");
write("Index of 'c' in 'abcd' is: " + index);

// search
index = "abcd".search(/c/);
write("Index of 'c' in 'abcd' is (using 'search'): " + index);
newParagraph();

// replace
var lyric = "3 oh 3 it's a magic number";
write('lyric.replace("3", "4"): ' + lyric.replace("3", "4"));
write('lyric.replace(/3/, "4"): ' + lyric.replace(/3/, "4"));
write('lyric.replace(/3/g, "4"): ' + lyric.replace(/3/g, "4"));
newParagraph();

// slice
var letters = ['a', 'b', 'c', 'd'];
var sliced = letters.slice(1,3);
for ( var i = 0; i < sliced.length; i++){
    write(sliced[i]);
}
newParagraph();

// split
var words = "The western wave was all a-flame".split(" ");
for(var i = 0; i<words.length; i++){
    write(words[i]);
}

// toUpperCase / toLowerCase
var name = "Frank";
write("Upper case of 'Frank:': " + name.toUpperCase());
write("Lower case of 'Frank:': " + name.toLowerCase());