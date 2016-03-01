// update p element with results
function write(message) {
  document.getElementById('message').innerHTML += message + '<br/>';
}

function newParagraph(){
    write("")
}


write("isNaN(NaN): " + isNaN(NaN));
newParagraph();

write('isNaN("hello world"): ' + isNaN("hello world"));
newParagraph();

write("isNaN(5.5): " + isNaN(5.5));
newParagraph();

write("isNaN(2 / 'a'): " + isNaN(2 / 'a'));
newParagraph();
