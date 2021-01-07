// Spraying Trees

// 

// Solution 1 

let task = (w,n,c) => {
    let obj = {'Monday':'James','Tuesday':'John','Wednesday':'Robert','Thursday':'Michael','Friday':'William'};
    return `It is ${w} today, ${obj[w]}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`;
  };

// Solution 2 

const task = function(w, n, c) {
  const dic = {
    'Monday'   : 'James',
    'Tuesday'  : 'John',
    'Wednesday': 'Robert',
    'Thursday' : 'Michael',
    'Friday'   : 'William'
  }
  return `It is ${w} today, ${dic[w]}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`
}