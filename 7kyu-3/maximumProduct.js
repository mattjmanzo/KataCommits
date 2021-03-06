// Maximum Product 

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Solution 1 

function adjacentElementsProduct(array) {
    let newArr = []
    for(i=0; i < array.length-1; i++){
      newArr.push(array[i]*array[i+1])
    }  
    return Math.max(...newArr)
  }

// Solution 2 

function adjacentElementsProduct(a) {
  return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
}