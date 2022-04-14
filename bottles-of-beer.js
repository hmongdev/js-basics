/*purpose: iterate the lyrics song lyrics of 99 Bottles of Beer
concepts: for loop, variables, decrement, and control flow */

//for loop is easier to use than while loop
count = 99;
for (i = 99; i > 1; i--) {
    if (i > 1) {
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down, pass it around, ");
        count--;
        console.log(count + " bottles of beer on the wall.");
    }
    if (count === 1) {
        console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
    }
}