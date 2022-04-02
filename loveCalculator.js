/*love calculator
This exercise uses if-else statements (control flow) and comparators
that gives unique 5 unique messages depending on what random number
is generated */

//creates a random number between 0-100
var n = Math.random()*100;
loveScore = Math.ceil(n);

//statement 1
if (loveScore <= 20) {
    console.log("Sorry to break your heart, but there's nothing here. At "+loveScore+"%, the most you can hope for is a cheap affair.");
}
//statement 2
if (loveScore >= 21 && loveScore <= 40) {
    console.log("You're better off talking to a wall. Your love will be unrequited at "+loveScore+"%.");
}
//statement 3
if (loveScore >= 41 && loveScore <= 60) {
    console.log(loveScore+"% of falling in love. There's definitely a spark burning this flame, but how long will it last?");
}
//statement 4
if (loveScore >= 61 && loveScore <= 80) {
    console.log("Wow-sers in my trousers! The attraction is strong at "+loveScore+"%! Are star-crossed lovers a thing?");
}
//statement 5
if (loveScore >= 81 && loveScore <= 100) {
    console.log(+loveScore+"%! THE STARS HAVE ALIGNED! Wssshhhhhhhh~ I can hear the wedding bells ringing.");
}