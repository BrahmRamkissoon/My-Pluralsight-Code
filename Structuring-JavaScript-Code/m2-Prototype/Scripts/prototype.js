window.onload = function(){
    var c = new Calculator('eq');
    c.add(2, 2);
};

// Constructor

var Calculator = function(eq){
    this.eqCtl = document.getElementById(eq);
};

Calculator.prototype = {
    add: function(x,y){
        var val = x + y;
        this.eqCtl.innerHTML = val;
    }
};
