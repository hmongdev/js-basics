//concepts: control flow, variables, string interpolation, Math.x, 
let userName = "Avery";

userName ? console.log(`Hello, ${userName}!`) : 'Hello!';

const userQuestion = console.log('Will I live forever?');

const randomNumber = Math.ceil(Math.random()*8);

switch(randomNumber){
  case 1:
    console.log('It is certain');
    break;
  case 2:
    console.log('It is decidedly so');
    break;
  case 3:
    console.log('Reply hazy try again');
    break;
  case 4:
    console.log('Cannot predict now');
    break;
  case 5:
    console.log('Do not count on it');
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('Outlook not so good');
    break;
  case 8:
    console.log('Signs point to yes');
    break;
  default:
    console.log('You broke me :(')
}