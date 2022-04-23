//concept: looping through objects with for...in

const avengers = {
    team: {
        'Captain America': {
            name: 'Steve Rogers',
            class: 'Leader',
            weapon: 'Shield',
            powers: ['Healing', 'Super Strength', 'Super Speed']
        },

        "Hulk": {
            name: 'Bruce Banner',
            class: 'Brawler',
            weapon: 'Body',
            powers: ['Healing', 'Super Strength', 'Super Speed']
        },

        "Black Widow": {
            name: 'Natasha Romanov',
            class: 'Spy',
            weapon: 'Pistols',
            powers: ['']
        }
    }
}

//for...in
for (let avenger in avengers.team) {
    console.log(`${avenger}, ${avengers.team[avenger].name}, ${avengers.team[avenger].class}`);
}