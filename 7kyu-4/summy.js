// Summy 

// Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.

// Solution 1 

function summy(s){
    return s.split` `.reduce((a,b)=>a+ +b,0)
  }