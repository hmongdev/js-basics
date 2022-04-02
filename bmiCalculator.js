/*purpose: user can input their weight and height, then bmiCalculator will output 1 of 3 different
messages based on the user's BMI
concepts: control flow, variables, Math.pow, .toFixed*/

//bmiCalculator function
function bmiCalculator(weightPounds, heightInches) {
    //this logic calculates the bmi based on parameters
    var bmi = (weightPounds / Math.pow(heightInches, 2)) * 703;
    //.toFixed(n) rounds the bmi to a decimal place (n), for reading ease
    bmiScore = bmi.toFixed(1);
    //var interp* is empty here, but will be updated below
    var interpretation = "";
    //control flow
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmiScore + ", so you are underweight.";
    } else if (bmi > 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmiScore + ", so you have a normal weight.";
    } else if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmiScore + ", so you are overweight.";
    } else {
        interpretation = "Error";
    }
    //give us the output
    return interpretation;
}
//log the interpretation in the console
console.log(bmiCalculator(130, 65));