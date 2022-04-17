/* purpose: simple script that imitates a 6-sided die 
concepts: Math.random(), math.ceil, console.log */

//dice function
function dieRoll() {
    var n = Math.random();
    console.log("You roll the die...It's a "+Math.ceil(n*6)+"!");
}

dieRoll();
