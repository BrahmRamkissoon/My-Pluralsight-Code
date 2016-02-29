// update p element with results
function write(message) {
  document.getElementById('message').innerHTML += message + '<br/>';
}

function newParagraph(){
    write("")
}

// update second p element 
function writeP2(message_2) {
  document.getElementById('message_2').innerHTML += message_2 + '<br/>';
}

function newP2(){
    writeP2("")
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

/*
* Array demo using Underscore.js
*/

var numbers = [1, 2, 3];

// functional style - loop through array then output
_.each(numbers, function(num){
       writeP2(num);
});
newP2();


// Object-Oriented Style - wrap the numbers array then output
_(numbers).each(function(num){
    writeP2(num);
});
newP2();

// map - translates collection to another
var doubled = _(numbers).map(function(num){
    return num * 2;
});
writeP2("[1, 2, 3] doubled: " + doubled);
newP2();

// reduce - ditills collection to a single val
var total = _(doubled).reduce(function(memo, num){
    return memo += num;
}, 0);
writeP2("[2, 4, 6] reduced: " + total);
newP2();

// select - used to filter a collection via callback function
var evens = _([1,2,3,4,5]).select(function(num){
    return num % 2 === 0;
});
writeP2("[1,2,3,4,5] evens: " + evens);
newP2();

// all - returns true if callback func returns true for all items in array
var allNumbers = _([1,2,'a']).all(function(item){
    return typeof item === "number";
});
writeP2(allNumbers);
newP2();

// include - simple test if collection contains an item - return boolean
var hasPeanuts = _(['wheat flour', 'sugar', 'salt', 'peanut', 'caramel']).include("peanut");
writeP2(hasPeanuts);
newP2();

// max
writeP2(_({a:3, b:2, c:1}).max());