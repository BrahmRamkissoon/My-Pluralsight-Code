
// fluent api - no constructor here
var Calc = require('./calc2.js');

Calc
    .add(1,2)
    .multiply(3)
    .equals(function(result){
        console.log(result);
    });