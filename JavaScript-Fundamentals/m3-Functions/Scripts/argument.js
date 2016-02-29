// update p element with results
function write(message){
  document.getElementById('message').innerHTML += message + '<br/>';
}


// arguments is not an array
function argumentsType(){
    write("length of arguments: " + arguments.length);
    write("arguments[0]: " + arguments[0]);
    return typeof arguments;
}
write("Type of arguments: " + argumentsType("a") + "<br/>");

//function that can be called with any number of parameters
function add(){
    var total = 0;
    for ( var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

write(add());
write(add(5));
write(add(2,3,8,2));
