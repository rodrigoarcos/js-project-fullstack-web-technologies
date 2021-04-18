import Deck from "./deck.js";
import Players from "./player.js";

function startGame(round) {
  if (round > 16) return console.error("Game is over.");
  const deck = new Deck();
  const players = new Players();
  players.deal(deck.shuffle(), round);
  players.makeGuess(1, round);
  // put hands into table (making them visible)
  let firstCard = players.putCardIntoTable(0, 1);
  let secondCard = players.putCardIntoTable(1, 0);
  let tableCards = [firstCard, secondCard];
  players.currentHand();
  players.compareHands(tableCards);

  players.givePoints();
  players.showPlayers();
  //nextRound(round)
}

startGame(2);

function nextRound(round) {
  startGame(round + 1);
}
