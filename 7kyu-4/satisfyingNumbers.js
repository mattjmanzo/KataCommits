// Satisfying Numbers 

// Solution 1 

function gcd(a, b) {
    return b ? gcd(b, a % b) : Math.abs(a);
  }
  
  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }
  
  function smallest(n) {
    return n == 1 ? 1 : lcm(n, smallest(n - 1));
  }