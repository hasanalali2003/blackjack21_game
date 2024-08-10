let sum = 0;
let cards = [];

let hasBlackjack = false;
let isAlive = false;

let message = "";

let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let msgEl = document.getElementById("msg-el");

let player = {
    name: "Hasan",
    chips: 150,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) randomCard = 11;
    else if (randomCard > 11) randomCard = 10;
    return randomCard;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}
function startGame() {
    isAlive = true;
    cards = [];
    cards.push(getRandomCard(), getRandomCard());

    sum = cards[0] + cards[1];
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw another card ?";
    } else if (sum === 21) {
        message = "You Win!";
        hasBlackjack = true;
    } else {
        message = "You Lose!";
        isAlive = false;
    }

    msgEl.textContent = message;
}
