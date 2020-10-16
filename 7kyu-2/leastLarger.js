// Least Larger 

// Given an array of numbers and an index, return the index of the least number larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Solution 1 

function leastLarger(a,i) {
    let diff, index=-1;
    for (let n = 0; n < a.length; n++)
      if ((a[n]-a[i] > 0) && (diff === undefined || a[n]-a[i]<diff)) {
        diff = a[n]-a[i];
        index=n;
      }
    return index;
  }

  // Solution 2 

  function leastLarger(a, i) {
    const targetVal = a[i]
    const largerVals = a.filter(num => num > targetVal)
    const leastLargeVal = Math.min(...largerVals)
    
    return a.findIndex(num => num === leastLargeVal)
}