let cards = []; // array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = fulse;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
console.log(cards);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  // Generate two random numbes
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  // Re-assign the cards and sum variables so that the game can start
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
