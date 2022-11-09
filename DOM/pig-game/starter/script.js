'use strict';


// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, playing

const init = function () {

    score = [0, 0]     //scores[0] ==>  player one  //scores[1] ==>  player two
    currentScore = 0
    activePlayer = 0
    playing = true

    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0
    //diceEl.style.display = "none"
    diceEl.classList.add('hidden')
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')

    

}
init()

function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer == 0 ? 1 : 0
    currentScore = 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')

}


btnRoll.addEventListener('click', function () {

    let randomNumber = Math.floor(Math.random() * 6) + 1

    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${randomNumber}.png`

    if (randomNumber != 1) {
        currentScore = currentScore + randomNumber
        document.getElementById(`current--${activePlayer}`).textContent = randomNumber
    }
    else {
        switchPlayer()
    }



})

btnHold.addEventListener('click', function () {
    if (playing) {
        score[activePlayer] = currentScore + score[activePlayer]
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]
        if (score[activePlayer] > 50) {
            playing = false
            diceEl.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        }
        else {
            switchPlayer()
        }



    }

})

// new
btnNew.addEventListener('click',init)

