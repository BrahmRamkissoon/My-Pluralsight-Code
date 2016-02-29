// update p element with results
function write(message) {
  document.getElementById('message').innerHTML += message + '<br/>';
}


function newParagraph(){
    write("")
}

// empty erray
var empty = [];
write("length of an empty array: " + empty.length);
newParagraph();

// enumeration
var letters = ['a', 'b', 'c', 'd'];
for (var i=0; i < letters.length; i++){
    write(letters[i]);
}
newParagraph();

// stack methods
letters.push('e');
write("['a', 'b', 'c', 'd'].push('e'): " + letters);
write("['a', 'b', 'c', 'd'].pop('e'): " + letters.pop());
write("letters: " + letters);
newParagraph();


// reverse
write("['a', 'b', 'c', 'd'].reverse(): " + letters.reverse());
newParagraph();

// slice(start, end) - copies part of an array
write("['a', 'b', 'c', 'd'].slice(1,3): " + ['a', 'b', 'c', 'd'].slice(1,3));
newParagraph();

// splice(start, count) - takes part of an array
var collection = ['a', 'b', 'c', 'd'];
write("['a', 'b', 'c', 'd'].spice(1,2): " + collection.splice(1, 2));
write("collection: " + collection);
newParagraph();

// sort
write("['q', 'm', 'j', 't', 'v', 'b'].sort(): " + ['q', 'm', 'j', 't', 'v', 'b'].sort());
write("[2,1,8,99,75,10,22].sort(): " + [2,1,8,99,75,10,22].sort());
write("[2,1,8,99,75,10,22].sort(function (first,second){ "
      + "\n return first - second;"
      + "}));: " 
      + [2,1,8,99,75,10,22].sort(function (first,second){ 
        return first - second;
       }));
