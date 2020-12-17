// Red Knight 

// Solution 1 

function redKnight(N, P) {
    return [(N+P)%2 ? 'Black' : 'White', P*2]
  }

// Solution 2 

const redKnight = (n,p) => [['White','Black'][(n+p)%2],p*2];