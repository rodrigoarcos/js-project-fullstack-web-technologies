# js-project-fullstack-web-technologies

## Game: arab poker [this game is property of Jagacardi. It was invented by its members]

## Card values:

Suits are not usable in this game. Number 2 is the lowest card one can have and the ace is the highest one. If there's a draw, the first card that was put into the table wins.

## Rules:

Arab Poker is played with the classic poker deck. It is divided into 16 rounds and it requires a minimum of two players. For each round we deal the number of cards of that same round (round 1: 1 card each, round 8: 8 cards each) up to round 8. In round 9 we deal 8 cards per player and we decrease one card for each round until round 16 (1 card).

The turn is moving clockwise every round. The first player of the round recieves an amount of cards. Depending on which round we're on the player can or cannot see this card. In rounds 1 and 16 the player cannot see his own card, but everyone else can.

Once a player has received his cards he has to make a guess on how many rounds he'll win. Don't worry, I'll explain how a round goes later on. Then, if this player has guessed right the number of rounds he has won, this player will have 10 points per each round he has won. If not, he'll have -10 point for each round he has not won (p. ex. if a player says he will win 0 rounds and he wins 1, this player will get -10 points. Same goes if the player says 3 wins and gets just 1. In this case he will get -20 points.). The player with the highest punctuation at the end of round 16 wins the game.

### Guessing:

When a player gets his hand he has to guess how many cards he'll get. This seems easy if you are not the last person. The fun of the game is that the sum of the guessings of every player cannot be equal to the number of the round, but this condition only applies to the last player in the round. For example, imagine the following scenario:

Round 4. 4 players. 3 of them have told their guessings and now it's number 4's turn:

- Player 1: 1
- Player 2: 1
- Player 3: 2

Player 4 cannot say 0, since 1+1+2+0 = 4 and we're on round 4. He is forced to say **at least** 1. Keep in mind that the number of guessings can be lower or higher than the number of rounds.

- Number of guessing per player: a player cannot guess more cards than the number of the round. If we're in round 4, a player cannot say he'll get 5 rounds. Two players can say they'll get 4 rounds, though.

### Round:

- Round 1 and 16: players have to guess how many rounds they'll get seeing just all the opponents cards. When all the guessing is made, all cards are put on the table following the players turns.
- Rest of rounds: in turns, each player has to put into the table *one* of the cards of their hand. When the round is finished, the player that put the highest value card gets the round and starts the next one. This is repeated until there are no cards left in the players' hands.
