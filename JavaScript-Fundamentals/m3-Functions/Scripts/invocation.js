// update p element with results
function write(message){
  document.getElementById('message').innerHTML += message + '<br/>';
}


// add function
function add(num, num2, num3){
    return num + num2 + num3;
};

// no overloading - the most recent add function is used
function add(num, num2){
    return num + num2;
};

write(add(6,7));
write(add(6,7,1));
