let deck = require("./model/cards.json");
let players = require("./model/players.json");

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
  get value() {
    return this.value();
  }
}

class Player {
  constructor(name, surname, hand, points, turn) {
    this.name = name;
    this.surname = surname;
    this.hand = hand;
    this.points = points;
    this.turn = turn;
  }
}

let shuffle = (wholeDeck) => {
  for (let i = wholeDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wholeDeck[i], wholeDeck[j]] = [wholeDeck[j], wholeDeck[i]];
  }
  return wholeDeck;
};

console.log(shuffle(deck));

let handGenerator = (wholeDeck, players, round) => {
    for(let i = 0; i <= round; i++) {
        for(let player in players){
            player.hand.push(wholeDeck[i]);
        }
    }
}
