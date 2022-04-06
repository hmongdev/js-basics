// practicing a simple for loop

timer = 10;
for (i = 10; i >= 1; i--) {
    if (i >= 1) {
        console.log("This will self-destruct in " + timer + " seconds.");
        timer--;
    }
    if (timer === 0) {
        console.log("KABOOM!");
    }
}