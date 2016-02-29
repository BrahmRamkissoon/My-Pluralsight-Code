// update p element with results
function write(message) {
  document.getElementById('message').innerHTML += message + '<br/>';
}


// function outer() demonstrates closure by 
// calling the inner() and middle() functions
// the inner() function is able to print abc values
var a = "a";

var outer = function(){
    var b = "b";
    
    var middle = function(){
        var c = "c";
        
        // the function 'inner' can access all variables in the outer scopes
        var inner= function(){
            write (a + b + c);
        }
        
        inner();
    };
    
    middle();
};

outer();