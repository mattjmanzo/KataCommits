// Array Element Parrity 

// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Solution 1 

const solve=a=>a.find(e=>!a.includes(-e));