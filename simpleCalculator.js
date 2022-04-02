//purpose: simple calculator app that adds and multiples
//concept: function, higher-order functions, return
//main takeaway: you can input a function as a parameter

function add(num1, num2) {
    return num1+num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function minus(num1, num2) {
    return num1-num2;
}

function divide(num1, num2) {
    return num1/num2;
}

//this function takes 3 parameters, the 'operator' is a used here as input but it's also a function above
function calculator(num1, num2, operator) { //this takes in a third parameter: operator(function)
    return operator(num1, num2);
}

console.log(calculator(4,5,divide));