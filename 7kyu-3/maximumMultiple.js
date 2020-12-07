// Maximum Multiple 

// Solution 1 

function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }

// Solution 2 

const maxMultiple = (divisor,bound) => bound - bound % divisor ;