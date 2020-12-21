// Boiled Eggs 

// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

// Solution 1 

function cookingTime(eggs) {
    return 5 * Math.ceil(eggs / 8);
  }

// Solution 2 

function cookingTime(eggs) {
  var maxEggs = 8;
  var time = 5;
  return Math.ceil( eggs / maxEggs ) * time;
}