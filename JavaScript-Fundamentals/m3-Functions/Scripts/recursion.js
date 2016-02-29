// update p element with results
function write(message) {
  document.getElementById('message').innerHTML += message + '<br/>';
}


// recursion shown by factorial
function factorialize(num) {    
   if (num === 0 || num === 1) {
      return 1;
    }
  return num * factorialize(num-1);  
}

write("Factorial of 5: " + factorialize(5));
