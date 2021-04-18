const playersModel = [
  {
    name: "Rodrigo",
    id: "rod",
    hand: [],
    points: 0,
    turn: 1,
    currentGuess: 0,
    roundsWon: 0,
  },
  {
    name: "Mouad",
    id: "mou",
    hand: [],
    points: 0,
    turn: 2,
    currentGuess: 0,
    roundsWon: 0,
  },
];

const cardValues = {
    '2': 1,
    '3': 2,
    '4': 3,
    '5': 4,
    '6': 5,
    '7': 6,
    '8': 7,
    '9': 8,
    '10': 9,
    'J': 10,
    'Q': 11,
    'K': 12,
    'A': 13,
  };

export default class Players {
  constructor(players = setPlayers()) {
    this.players = players;
  }

  get numberOfPlayers() {
    return this.players.length;
  }
  get currentSumOfGuesses() {
    let sum = 0;
    for (let i in this.players) {
      sum += this.players[i].currentGuess;
    }
    return sum;
  }

  currentHand() {
    for (let i = 0; i < this.numberOfPlayers; i++) {
      console.log(this.players[i].currentHand);
    }
  }

  showPlayers() {
    for (let i = 0; i < this.numberOfPlayers; i++) {
      console.log(this.players[i]);
    }
  }

  makeGuess(number, round) {
    if (number + this.currentSumOfGuesses == round || number > round) {
      return console.error("You cannot choose that number.");
    } else {
      for (let i in this.players) {
        this.players[i].makeGuess(number);
      }
    }
  }

  deal(deck, round) {
    for (let i = 0; i < round; i++) {
      for (let j = 0; j < this.numberOfPlayers; j++) {
        let handCard;
        if (round == 1 || round == 16) {
          handCard = new HandCard(deck[0], false, true, this.players[j].id);
        } else {
          handCard = new HandCard(deck[0], true, false, this.players[j].id);
        }
        this.players[j].hand.push(handCard);
        deck.shift();
      }
    }
  }

  putCardIntoTable(player, card) {
    this.players[player].hand[card].visibleToRest = true;
    return this.players[player].hand[card];
  }

  compareHands(tableCards) {
    let biggestHandValue = 0;
    let biggestHand;
    for (let i in tableCards) {
      if(cardValues[tableCards[i].card.value] > biggestHandValue) {
        biggestHandValue = tableCards[i].card.value;
        biggestHand = tableCards[i];
      }
    }
    for(let i in this.players){
        if(this.players[i].id == biggestHand.owner){
            this.players[i].roundsWon += 1;
        }
    }
  }

  givePoints(){
      for(let i in this.players) {
          let a = this.players[i].currentGuess;
          let b = this.players[i].roundsWon;
          if(a == b){
              this.players[i].points += a * 10;
          } else {
              let value = (a > b) ? (a - b) : (b - a);
              this.players[i].points -= value * 10;  
          }
      }
  }
}

class Player {
  constructor(name, id, hand, points, turn, currentGuess, roundsWon) {
    this.name = name;
    this.id = id;
    this.hand = hand;
    this.points = points;
    this.turn = turn;
    this.currentGuess = currentGuess;
    this.roundsWon = roundsWon;
  }

  get currentHand() {
    return this.hand;
  }

  makeGuess(number) {
    this.currentGuess = number;
  }
}

class HandCard {
  constructor(
    card,
    visibleToSelf,
    visibleToRest,
    owner
  ) {
    this.card = card;
    this.visibleToSelf = visibleToSelf;
    this.visibleToRest = visibleToRest;
    this.owner = owner;
  }
}

function setPlayers() {
  return playersModel.map((pl) => {
    return new Player(
      pl.name,
      pl.id,
      pl.hand,
      pl.points,
      pl.turn,
      pl.currentGuess,
      pl.roundsWon
    );
  });
}
