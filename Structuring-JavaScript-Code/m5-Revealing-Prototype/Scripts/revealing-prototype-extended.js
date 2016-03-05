// normally use jQuery for window.onload
window.onload = function(){
    
    // showcase prototype overriding function feature 
    // where we do not need to edit source code of calculator.js
    Calculator.prototype.add = function(x, y){
        this.eqCtl.innerHTML = x * y;
    };
        
    var calc = new Calculator('Output');
    calc.add(3,3);
    calc.subtract(2,2);
};

// calculator.js
// Constructor
var Calculator = function(eq){
    // state goes here
    // this refers to this instance of Calculator
    this.eqCtl = document.getElementById(eq);
};
        
Calculator.prototype = function (){
    
    // private members
    var add = function(x,y){
        this.eqCtl.innerHTML = x + y;
        },
        subtract = function(x, y){
            alert( x - y);
        };
    
    // public members
    return{
        add: add,
        subtract: subtract
    };
// self - invoking
} ();
