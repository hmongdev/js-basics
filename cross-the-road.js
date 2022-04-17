//purpose: if the walk sign is on (true), you can cross the street
//concepts: variables, arrays, built-in objects (Math.x), ternary operator

let walk = [true, false];

let i = Math.floor(Math.random()*2);
walk[i] ? console.log('There are no cars. You can cross the street.') : console.log('Traffic incoming. Do not cross the street.');
