function lifeInWeeks(age) {

    /************Don't change the code above************/
    /* In this challenge, you're going to write a function that that tells us 
     how many days, weeks, and months we have left if we live till 90 years old */

    //Write your code here.

    //years remaining
    yearsLeft = (90 - age);
    
    //time in days, weeks, months
    days = yearsLeft*365;
    weeks = yearsLeft*52;
    months = yearsLeft*12;

    //message returned
    console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left before you turn 90.");

    /*************Don't change the code below**********/
}

//function call
lifeInWeeks(29);