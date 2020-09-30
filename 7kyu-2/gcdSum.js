// GCD Sum

// Given the sum and gcd of two numbers, return those two numbers in ascending order. If the numbers do not exist, return -1, (or NULL in C, tuple (-1,-1) in C#, pair (-1,-1) in C++,None in Rust, array {-1,-1} in Java and Golang).

// Solution 1

function solve(sum, gcd) {
  let result = [];
  if (sum % gcd != 0) {
    return -1;
  } else {
    result.push(gcd);
    result.push(sum - gcd);
    return result;
  }
}

// Solution 2

function solve(x, y) {
  return x % y ? -1 : [y, x - y];
}
