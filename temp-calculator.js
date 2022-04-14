//concepts: variables, mathematical operators, string interpolation, built-in object(Math.floor), console.log
//purpose: this simple script converts degrees in kelvin to fahrenheit

// value of kelvin will be constant
const kelvin = 0;

//celsius is 273 degrees less than kelvin
let celsius = kelvin - 273;

//fahrenheit equation with operators
let fahrenheit = Math.floor((celsius * (9/5))+32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);