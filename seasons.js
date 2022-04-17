//concepts: else if statements, escaping, switch statements
//purpose: practice js basics

let seasons = ["Fall", "Summer", "Winter", "Spring"];

function changeSeasons() {
    for (let i = 0; i < seasons.length; i++) {
        let i = Math.floor(Math.random()*4);
        if (seasons[i] === 'Fall') {
            console.log('The season is Fall. It\'s not too hot or cold. The leaves are changing color.');
            break;
        } else if (seasons[i] === 'Summer') {
            console.log('The season is Summer. It\'s hot and sunny outside!');
            break;
        } else if (seasons[i] === 'Fall') {
            console.log('The season is Fall. It\'s not too hot or cold. The leaves are changing.');
            break;
        } else if (seasons[i] === 'Spring') {
            console.log('The season is Spring. There\'s a chance of rain! Bring an umbrella.');
            break;
        } else {
            console.log('Invalid season');
            break;
        }
    }
}

changeSeasons();