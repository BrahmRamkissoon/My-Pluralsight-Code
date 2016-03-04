// Show persistence of data in closures
window.onload = function (){
    var output = document.getElementById('Output');
    var closure = myClosure2();
    output.innerHTML = closure.foo();
    
    window.setTimeout(function(){
        output.innerHTML += '<br/>' + closure.foo();
    }, 1000);
    
}

function myNonClosure(){
    var date = new Date();
    return date.getMilliseconds();
}

// Class
function myClosure(){
    var date = new Date();
    return function(){
        return date.getMilliseconds();
    };
}

// Class
var myClosure2 = function (){
    var date = new Date(),
        myNestedFunc = function(){
        return date.getMilliseconds();
    }
    // object literal
    return {
        foo: myNestedFunc
    };
}