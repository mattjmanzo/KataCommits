// GCD Sum

//

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
