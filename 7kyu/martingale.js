// Mr. Martingale

// You're in the casino, playing Roulette, going for the "1-18" bets only and desperate to beat the house and so you want to test how effective the Martingale strategy is. You will be given a starting cash balance and an array of binary digits to represent a win or a loss as you play: 0 for loss and 1 for win. You should create a function martingale to return the balance after playing all rounds. You start with a stake of 100 dollars(unit of cash). If you lose a round, you lose the stake placed on that round and double the stake for your next bet. When you win, you win 100% of the stake and revert back to staking 100 dollars on your next bet.

// Solution 1

function martingale(bank, outcomes) {
  let stack = bank;
  let roundBet = 100;
  for (let i = 0; i < outcomes.length; i++) {
    let round = outcomes[i];
    if (round == 1) {
      stack = stack + roundBet;
      roundBet = 100;
    } else {
      stack = stack - roundBet;
      roundBet *= 2;
    }
  }
  return stack;
}
