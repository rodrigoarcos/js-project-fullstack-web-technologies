let deck = require("./model/cards.json");
let participants = require("./model/players.json");

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
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

class Hand {
  constructor(card, visible) {
    this.card = card;
    this.visible = visible;
  }
}

let cards = [];
for (let card in deck) {
  let auxCard = new Card(deck[card].suit, deck[card].value);
  cards.push(auxCard);
}

let players = [];
for (let player in participants) {
  let auxPlayer = new Player(
    participants[player].name,
    participants[player].surname,
    participants[player].hand,
    participants[player].points,
    participants[player].turn
  );
  players.push(auxPlayer);
}

let shuffle = (wholeDeck) => {
  for (let i = wholeDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wholeDeck[i], wholeDeck[j]] = [wholeDeck[j], wholeDeck[i]];
  }
  return wholeDeck;
};

console.log(shuffle(cards));

let handGenerator = (wholeDeck, players, round) => {
  for (let i = 0; i <= round; i++) {
    for (let player in players) {
      let auxHand = new Hand(wholeDeck[i], 'false')
      players[player].hand.push(auxHand);
      wholeDeck.splice(i, 1);
      console.log(players[player].hand)
    }
  }
};

console.log(handGenerator(shuffle(deck), players, 2));
