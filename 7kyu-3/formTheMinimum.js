// Form the Minimum 

// 

// Solution 1

function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
  }