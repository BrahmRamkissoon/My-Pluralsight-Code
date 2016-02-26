// Variable Declarations
var streetNumber = 49;
var streetName = "Brunswick";

// Example 1
function write(message){
  document.getElementById('message').innerHTML += message + '<br/>';
}

write("comparing simple types");
write("cat" == "cat");
write(42 == 40 + 2);
write("");

write("with type coercion");
write("42" == 40 + 2);
write(null == undefined);
write(false == 0);
write(' \t ' == 0);
write("");

write("without type coercion");
write(42 === 40 + 2);
write("42" === 40 + 2);
write(null === undefined);
write(false === 0);
write(' \t ' === 0);
write("");

write("comparing objects");
write({ prop: 0 } === { prop: 0 });  // identical objects are not equal
var first = { prop: 0 }; 
var second = first;
write(first === second);