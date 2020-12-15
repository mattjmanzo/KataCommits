// Red Knight 

// Solution 1 

function redKnight(N, P) {
    return [(N+P)%2 ? 'Black' : 'White', P*2]
  }