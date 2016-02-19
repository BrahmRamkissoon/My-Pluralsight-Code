/*
* Simulate a roll of the dice
*/

var getDieRoll = function (dieSize) {
    var result  = Math.ceil(dieSize * Math.random());
    return result;
};


for(var i = 0; i < process.argv.length; i++){
    console.log(process.argv[i]);
}

var roll = getDieRoll(6);

for( var i = 0; i < 10; i++ )

}
if(roll >= 3 && roll <= 5){
    console.log("Great Roll!");
}
else if(roll == 1){
    console.log("Terrible Roll");
}
else {
    console.log("That was an ok roll");
}
console.log("You rolled a " + roll)


