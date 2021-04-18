const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export default class Deck {
  constructor(cards = constructDeck()) {
    this.cards = cards;
  }

  get numberOfCards() {
      return this.cards.length;
  }
  
  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  };
}



class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

function constructDeck() {
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value)
        })
    })
}