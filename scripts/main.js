var character = {};

function raceChange(race) {
    console.log(getRace(race));
    document.getElementById('race-stats').innerHTML = JSON.stringify(getRace(race));
}

function classChange(classes) {
    console.log(getClass(classes));
}

function simulateRoll(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);     
}