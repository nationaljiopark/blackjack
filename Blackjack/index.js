let firstCard = getRandomCard();
let secondCard = getRandomCard();
// 1. Create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard]; // array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

// Make this function return a random number between 1 and 13
function getRandomCard() {
  return Math.floor(Math.random() * 13) + 1; // 1-13
}

// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el");
// Create a new function called startGame() that calls renderGame()
function startGame() {
  renderGame();
}

function renderGame() {
  // 2. Refer to the cards array when rendering out the cards
  cardsEl.textContent = "Cards: ";
  // Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

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
// 3. Use the getRandomCard() to set the value of card
function newCard() {
  let card = getRandomCard();
  sum += card;
  // Push the card to the cards array
  cards.push(card);
  console.log(cards);
  renderGame();
}
