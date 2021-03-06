// Double Trouble 

// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

// Solution 1 

function trouble(x, t){
    for(var i=0; i<x.length; i++) {
      if(x[i]+x[i+1]===t) {
        x.splice(i+1,1);
        i--;
      }
    }
    
    return x;
  }

// Solution 2 

function trouble(x, t){
  var newArray = [x[0]];
  for (i = 1; i < x.length; i++) {
    if (x[i] + newArray[newArray.length-1] != t) {
      newArray.push(x[i])
    } 
  }
  return newArray;
}