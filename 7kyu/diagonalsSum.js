// Diagonals Sum

// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

// Solution 1

function sum(matrix) {
  const n = matrix.length;

  return matrix.reduce((s, ar, i) => s + ar[i] + ar[n - i - 1], 0);
}
