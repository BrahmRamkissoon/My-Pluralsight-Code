// update p element with results
function write(message) {
  document.getElementById('message').innerHTML += message + '<br/>';
}

function newParagraph(){
    write("")
}


// Feb 29, 2016
var today = new Date(2016, 1, 29);
write(today);
write(today.toUTCString());
write(today.toLocaleDateString());
newParagraph();

// date subtraction
var from = new Date();
for (var i = 0; i < 100000000; i++){
    var result = Math.sqrt(i);
}
var to = new Date();
var elapsed = to - from;
write("Calculating the square root of 100 000 000 numbers took: " + elapsed + " milliseconds");


