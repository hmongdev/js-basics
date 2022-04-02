//fizzBuzz concepts: for loops, control flow, increment

//for loop
for (var i=1; i < 101; i++){
    //there are three parts to: for loop
    //1. var i=1; this is the start of the loop. we're telling the script to start at 1
    //2. i < 101; this is the end of the loop. we want the loop to stop at 100 since i < 101, not including 101
    //3. i++; this tells i to increment by 1
    if (i % 15 == 0) console.log("FizzBuzz"); // (i % 15) is equivalent to (i % 3 === 0) && (i % 5 === 0)
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}