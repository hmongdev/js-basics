//concept: switch statements, random generator

let light = ["red", "yellow", "green"];
let i = Math.floor(Math.random()*3);

switch(light[i]){
    case 'red':
        console.log('The light is red. Stop');
        break;
    case 'yellow':
        console.log('The light is yellow. Slow down');
        break;
    case 'green':
        console.log('The light is green. Go');
        break;
}