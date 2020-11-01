// Odd One Out 

// Create a function that takes an array of numbers, and returns the index of the first odd number.

// Solution 1 

function oddNum(numbers) {
    return numbers.findIndex(n => n % 2 != 0);
  }