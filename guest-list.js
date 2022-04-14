/* guestList introduces arrays and .includes to pull data from the array 
based on these two concepts, we can create a script that checks a user's name
against the existing array*/

var guestList = ["Angela","Jack","Ben", "Avery", "Lara", "James"];
var guestName = prompt("What's your name?");

if (guestList.includes(guestName)) {
    alert("You may go inside.");
} else {
    alert("Sorry, your name isn't on the guest list.");
}