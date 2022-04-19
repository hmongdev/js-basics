//global variables
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

//this fx can access the global variables
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());