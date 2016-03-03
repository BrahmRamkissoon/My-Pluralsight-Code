// Show persistence of data in closures
window.onload = function (){
    var output = document.getElementById('Output');
    var closure = myClosure();
    output.innerHTML = closure();
    
    window.setTimeout(function(){
        output.innerHTML += '<br/>' + closure();
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