// Form the Minimum 

// 

// Solution 1

function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
  }

// Solution 2 

function minValue(values){
  const n = values
    .filter((e, i, arr) => arr.indexOf(e) === i)
    .sort()
    .join('');
  return Number(n);
}