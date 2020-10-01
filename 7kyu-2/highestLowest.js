// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Solution 1

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
