//concepts: else if statements, escaping
//purpose: practice js basics

let season = 'fall';

if (season === 'summer') {
    console.log('It\'s hot and sunny outside!');
} else if (season === 'fall') {
    console.log('It\'s not too hot or cold. The leaves are changing color.');
} else if (season === 'winter') {
    console.log('It\'s cold outside! Wear something warm.');
} else if (season === 'spring') {
    console.log('There\'s a chance of rain! Bring an umbrella.');
} else {
    console.log('Invalid season');
}