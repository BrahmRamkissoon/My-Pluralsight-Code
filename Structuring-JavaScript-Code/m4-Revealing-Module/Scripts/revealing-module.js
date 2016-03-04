// normally use jQuery for window.onload
window.onload = function(){
    var calc = new Calculator('Output');
    calc.add(2, 2);
    alert(calc.eqCtl.innerHTML);
};

// calculator.js
// Constructor
var Calculator = function(eq){
    // private members
    var eqCtl = document.getElementById(eq);
    
    return{
        // public
        add: function(x,y){
            var val = x + y;
            eqCtl.innerHTML = val;
        }  
    };
};