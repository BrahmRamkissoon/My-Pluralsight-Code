// Variable Declarations
var streetNumber = 49;
var streetName = "Brunswick";

// Example 1
function example1(message){
  document.getElementById('example_1').innerHTML += message + '<br/>';
}

example1(typeof streetNumber + " " + streetNumber);
example1(typeof streetName + " " + streetName);


// Example 2
function example2(message){
  document.getElementById('example_2').innerHTML += message + '<br/>';
}

function add(first, second){
    // a = first;   // this is defined globally
    var a = first;  // this is defined locally
    return a + second;
}

example2("1 + 2 = " + add(1,2));
//example2("a: " + a);
example2("54 + 18 = " + add(54,18));
//example2("a: " + a);

if(!window.a){
    example2("a is undefined");
}

