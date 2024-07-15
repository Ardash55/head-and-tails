let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0
}

let user;
let comp;

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
        score.wins ++;
        localStorage.setItem('score', JSON.stringify(score));
        document.getElementById('score').textContent = 'Побед: ' + score.wins;
    } else {
        alert('Поражение. Выпала Решка');
        score.loses ++;
        localStorage.setItem('score', JSON.stringify(score));
        document.getElementById('score2').textContent = 'Поражений: ' + score.loses;
    }
    console.log(score);
}

function tails() {
    random();
    user = 'Орёл';
    if (user == comp) {
        alert('Победа. Выпала Решка');
        score.wins ++;
        localStorage.setItem('score', JSON.stringify(score));
        document.getElementById('score').textContent = 'Побед: ' + score.wins;
    } else {
        alert('Поражение. Выпал Орёл');
        score.loses ++;
        localStorage.setItem('score', JSON.stringify(score));
        document.getElementById('score2').textContent = 'Поражений: ' + score.loses;
    }
    console.log(score);
}

document.getElementById('score').textContent = 'Побед: ' + score.wins;
document.getElementById('score2').textContent = 'Поражений: ' + score.loses;