/* purpose: simple script that imitates a 6-sided die 
concepts: Math.random(), math.ceil, console.log */

//dice function
function dieRoll() {
    //Math.random range 0 - 0.99999
    var n = Math.random();
    /*I chose Math.ceil because it makes more sense that you can roll a 1-6 on a die.
    Math.floor would also work but the result would be 0-5. If this method is chosen, you'd just have to add 1*/
    console.log("You roll a die...It's a "+Math.ceil(n*6)+"!");
}

//call function (aka roll the die)
diceRoll();
