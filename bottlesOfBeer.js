/*purpose: iterate the lyrics song lyrics of 99 Bottles of Beer
concepts: while loop, variables, decrement, and control flow */

//starting count (beer lol)
var count = 99
//while loop, recall that while loops execute while a condition is true...
while (count > 1) {
    console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down, pass it around, ");
    count--;
    console.log(count + " bottles of beer on the wall.");
}
//need another condition for when count = 1, a different message displays
if (count === 1) {
    console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
}