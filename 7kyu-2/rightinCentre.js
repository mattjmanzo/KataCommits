// Right in the Centre 

// 

// Solution 1 

function isInMiddle(s) {
    return s.slice(4) ? isInMiddle(s.slice(1,-1)) : s.includes('abc')
  }