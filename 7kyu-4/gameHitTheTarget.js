// Game Hit The Target 

// Solution 1 

const solution = mtrx =>{ 
    const arr = mtrx.filter(el => el.includes('>') && el.includes('x') )[0] || []
    return arr.indexOf('>') < arr.indexOf('x') 
  }