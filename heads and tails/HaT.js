let score = {
    wins: 0,
    loses: 0
}

let user;
let comp;

// let localScore = localStorage.setItem('score', JSON.stringify(score));
let scoreParse = JSON.parse(localStorage.getItem('score'));

function random() {
    let random = Math.random();
    if (random < 0.5) {
        comp = 'Орёл';
    } else {
        comp = 'Решка';
    }
}

function heads() {
    random();
    user = 'Орёл';
    if (user == comp) {
        alert('Победа. Выпал Орёл');
        scoreParse.wins = scoreParse.wins + 1;
        score = localStorage.setItem('score', JSON.stringify(scoreParse));
        document.getElementById('score').textContent = 'Побед: ' + scoreParse.wins;
    } else {
        alert('Поражение. Выпала Решка');
        scoreParse.loses = scoreParse.loses + 1;
        score = localStorage.setItem('score', JSON.stringify(scoreParse));
        document.getElementById('score2').textContent = 'Поражений: ' + scoreParse.loses;
    }
    console.log(scoreParse);
}

function tails() {
    random();
    user = 'Орёл';
    if (user == comp) {
        alert('Победа. Выпала Решка');
        scoreParse.wins = scoreParse.wins + 1;
        score = localStorage.setItem('score', JSON.stringify(scoreParse));
        document.getElementById('score').textContent = 'Побед: ' + scoreParse.wins;
    } else {
        alert('Поражение. Выпал Орёл');
        scoreParse.loses = scoreParse.loses + 1;
        score = localStorage.setItem('score', JSON.stringify(scoreParse));
        document.getElementById('score2').textContent = 'Поражений: ' + scoreParse.loses;
    }
    console.log(scoreParse);
}

document.getElementById('score').textContent = 'Побед: ' + scoreParse.wins;
document.getElementById('score2').textContent = 'Поражений: ' + scoreParse.loses;