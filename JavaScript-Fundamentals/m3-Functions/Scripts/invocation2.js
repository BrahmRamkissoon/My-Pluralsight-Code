// update p element with results
function write(message){
  document.getElementById('message').innerHTML += message + '<br/>';
}


// Undefined is passed when not enough parameters
// this becomes Not a Number after operation
function add(num, num2){
   write(typeof num2)
    return num + num2;
};

write(add(1, 2, 99));
write(add(3) + '<br/>');


//primitives are passed by value
var name = "Tom";
function reverse(a){
    a = a.split('').reverse('').join('');
    return a;
}
write(reverse(name));
write(name + '<br/>');


// objects are passed by reference
var tom = { name: "Tom"};
function reversePersonsName(p){
    p.name = reverse(p.name);
    return p;
}

write(reversePersonsName(tom).name);
write(tom.name);
