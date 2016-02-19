/*
* Simulate a roll of the dice
*/

var getDieRoll = function (dieSize) {
    var result  = Math.ceil(dieSize * Math.random());
    return result;
};

var showResult = function () {
    console.log(firstDie);
    console.log(secondDie);
    console.log(firstDie + secondDie);
};

var firstDie = getDieRoll(6);
var secondDie = getDieRoll(6);
showResult();

