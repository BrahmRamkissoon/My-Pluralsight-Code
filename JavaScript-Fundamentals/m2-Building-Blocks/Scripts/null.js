// Variable Declarations
var myValue = null;

// null demo
function write (message){
  document.getElementById('message').innerHTML += message + '<br/>';
}

if (!myValue){
    write("null evaluates to false");
}

var hasAValue = 1;

// check if a varaiable has a value
if (hasAValue){
    write("hasAValue has a value");
}


// undefined demo
function write2 (message2){
  document.getElementById('message2').innerHTML += message2 + '<br/>';
}

var notAssigned;
write2 (notAssigned);

if (!notAssigned){
    write2("undefined evaluates to false");
}

var person = {
    name: "Frank"
};

 write2("non-existent object property: " + person.age);