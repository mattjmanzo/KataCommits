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


// Solution 2 

function solve(arr){
  let array = arr[0];
    for(let i=1; i < arr.length; i++){
      let step = [];
      let temp = []
      for(let j of arr[i]){
        step = array.map( e => e * j )
        temp = temp.concat( step )
      }
      array = temp
    }
    return array.sort((a,b)=> b-a)[0]
}