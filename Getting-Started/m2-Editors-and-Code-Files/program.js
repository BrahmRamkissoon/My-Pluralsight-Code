/* Calculate the cost per person for a pizza */ 

var totalCost = 14.99;

var sizeOfParty = process.argv[2];


var averageCost = totalCost / sizeOfParty;

console.log("$" + averageCost);