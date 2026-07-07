let firstCard = 10;
let secondCard = 4;
let cards=[firstCard,secondCard]// array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el");
// Create a new function called startGame() that calls renderGame()
function startGame() {
  renderGame();
}

function renderGame() {
  // render out firstCard and secondCard
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
// render out ALL the cards we have
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
  console.log("Drawing a new card from the deck!");
  // 1. Create a card variable, and hard code its value to a number (2-11)
  let card = 7;
  // 2. Add the new card to the sum variable
  sum += card;
  // 3. Call startGame()
  startGame();
}
