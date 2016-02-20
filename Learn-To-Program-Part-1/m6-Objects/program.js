/*
Use multiple source code files to build the program.

Use keyword require to have program.js to use dice.js
*/


var dice = require("./dice");
var die = dice.die;

console.log(dice);
die.size = 10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("Total Rolls " + die.totalRolls);

console.log(die);
