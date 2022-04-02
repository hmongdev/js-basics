/*purpose: a simple dog-to-human years calculator.
concepts: function, variables, basic math, console.log, calling function*/

//create a function with proper camelCase, parameter, and curly braces
function dogAge(age) {
    //logic to convert dog-age in human years
    dogHumanYears = (age - 2)*4 + 21;
    //console message
    console.log("Your dog is "+age+" years old. That means it's "+ dogHumanYears + " years-old in human years.");
}

//call function
dogAge (3)