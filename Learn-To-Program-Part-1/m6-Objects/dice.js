/*
Make your own object with additional responsibilities
*/

var die = {
    size: 6,
    totalRolls: 0,
    roll: function(){
        var result  = Math.ceil(this.size * Math.random());
        this.totalRolls++;
        return result;
    }
};

// other files can access dice.js as exports.die
exports.name = "My dice game"; 
exports.die = die;