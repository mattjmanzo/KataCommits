// Stones on the Table

// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B. Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

// Solution 1

function solve(stones) {
  let counter = 0;
  for (let i = 1; i < stones.length; i++) {
    if (stones[i] === stones[i - 1]) {
      counter++;
    }
  }
  return counter;
}

// Solution 2

function solve(stones) {
  return stones.split("").reduce((totalRemove, stone, i) => {
    return i >= 1 && stones[i - 1] === stone ? ++totalRemove : totalRemove;
  }, 0);
}
