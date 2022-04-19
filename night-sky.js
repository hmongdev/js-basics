//concept: global variables
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

//this fx can access the global variables
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

//concept: block scope (local variable)

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight'; //placing inside fx will create a block scope
    console.log(lightWaves); //'Moonlight'
  }
  
  logVisibleLightWaves();
  console.log(lightWaves); //ReferenceError - this can't access lightWaves since it's outside the fx