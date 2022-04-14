//This exercise focuses on inputs/outputs and return values. Essentially, you can save outputs (return value) in variables and use them in other functions.

//create getMilk() function
function getMilk(startingMoney, costPerBottle) {
  console.log("If you have $"+ startingMoney +" dollar(s), you can buy "+calcBottles(startingMoney, costPerBottle)+" bottle(s) of milk. Your change is $"+calcChange(startingMoney, costPerBottle)+".");
}

//calculates the number of bottles
function calcBottles(startingMoney, costPerBottle) {
  var numBottles = Math.floor(startingMoney / costPerBottle); //Math.floor will round down numBottles
  return numBottles;
}

//calculates the change (modulo)
function calcChange(startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;
  return change;
}

//function call
getMilk(6, 2.3);

