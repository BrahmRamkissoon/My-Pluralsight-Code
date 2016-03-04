// normally use jQuery for window.onload
window.onload = function(){
    calculator.add(2,2);
    calculator.subtract(2,2);
};

// calculator.js
// Constructor
var calculator = function(eq){
    // private members
    var eqCtl = document.getElementById(eq);
    
    add = function(x,y){
        var val = x + y;
        eqCtl.innerHTML = val;
    },
    
    subtract = function(x, y){
        alert( x - y);
    };
        
    
    // public members
    return{
        add: add,
        subtract: subtract
    };
}('Output');

// self - invoking