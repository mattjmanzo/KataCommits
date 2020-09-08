// Diagonals Sum

// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

// Solution 1

function sum(matrix) {
  const n = matrix.length;

  return matrix.reduce((s, ar, i) => s + ar[i] + ar[n - i - 1], 0);
}

// Solution 2

function sum(matrix) {
  if (!matrix.length) return 0;
  for (
    var i = 0, j = 0, k = matrix[i].length - 1, sum = 0;
    i < matrix.length;
    i++
  ) {
    sum += matrix[i][j++] + matrix[i][k--];
  }
  return sum;
}
