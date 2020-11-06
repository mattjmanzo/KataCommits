// Simple Array Product 

// In this Kata, you will be given a multi-dimensional array containing 2 or more sub-arrays of integers. Your task is to find the maximum product that can be formed by taking any one element from each sub-array.

// Solution 1 

function solve(a) {
    let min = 1, max = 1;
    for (let x of a) {
      let cur = [];
      for (let y of x) cur.push(y * min), cur.push(y * max);
      min = Math.min(...cur);
      max = Math.max(...cur);
    }
    return max;
  }