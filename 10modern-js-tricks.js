// https://betterprogramming.pub/10-modern-javascript-tricks-every-developer-should-use-377857311d79

// 1. Conditionally Add Properties to Object - Spread Operator
const angry = true //false

const greenAvenger = {
  Age: 49,
  Height: '5\'9',
  Weight: '128lbs',
  'Who Am I?': 'Bruce Banner, M.D., Ph.D.',
  Green: false,

  ...(angry && {
    Age: 13,
    Height: '7\'8\'',
    Weight: '1,400 lbs',
    'Who Am I?': 'The Hulk',
    Green: true,
    hulkSmash() {
      console.log('HULK SMASHHHH!');
    }
  })
};

console.log(greenAvenger);

// 2. Check if a Property Exists in an Object
// const person = { name: 'John Doe', salary: 1000 };
// console.log('salary' in person); // returns true
// console.log('age' in person); // returns false
console.log(`Does \'Age\' exist in greenAvenger:`, 'Age' in greenAvenger); //true
console.log(`Does \'Green\' exist in greenAvenger:`, 'green' in greenAvenger); //false

// 3. Dynamic Property Names in Objects
const dynamic = 'flavour';
let item = {
  name: 'Biscuit',
  [dynamic]: 'Chocolate'
}
console.log(item); // { name: 'Biscuit', flavour: 'Chocolate' }

