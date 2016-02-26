// Objects Demo
function write(message) {
  document.getElementById('message').innerHTML += message + '<br/><br/>';
}

// empty object
var empty = {};
write(empty.toString());

// new object constructor
var tim = new Object();
tim.name = "Tim Bob";
write(tim.name);

// object literal
var john = {
    name: "John Blaine",
    age: 21
};

write(john.name);
write(john.age);
write(john.toString());

// toString()
write([1, 2, 3].toString());
write(/\d/.toString());
write(false.toString());
write(write.toString());

// Modified toString for john
john.toString = function(){
    return "Name: " + this.name + ", Age: " + this.age;
};

write(john.toString());

//nested objects - use semi colons
var person = {
    address: {
        number: 1,
        street: "brunswick"
    }
};







