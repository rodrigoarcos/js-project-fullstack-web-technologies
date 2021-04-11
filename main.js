let deck = require("./model/model.json");

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
  get value() {
    return this.value();
  }
}

function shuffle(wholeDeck) {
  for (let i = wholeDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wholeDeck[i], wholeDeck[j]] = [wholeDeck[j], wholeDeck[i]];
  }
  return wholeDeck;
}

console.log(shuffle(deck));
