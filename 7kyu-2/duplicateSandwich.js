// Duplicate Sandwich 

// In this kata you will be given a list consisting of unique elements except for one thing that appears twice. Your task is to output a list of everything inbetween both occurrences of this element in the list.

// Solution 1 

function duplicateSandwich(arr) {
    let list = typeof arr === "string"
      ? arr.slice().split("")
      : arr.slice();
    
    let seen = new Map();
    
    for (const [curr_i, item] of list.entries()) {
      let prev_i = seen.get(item);
      
      if (typeof prev_i !== "undefined") {
        return typeof arr === "string"
          ? list.slice(prev_i + 1, curr_i).join("")
          : list.slice(prev_i + 1, curr_i);
      } else {
        seen.set(item, curr_i);  
      }
    }
  }

  // Solution 2 

  const duplicateSandwich = (list) => {
    let duplicated = [...list].find(a => list.indexOf(a) !== list.lastIndexOf(a))
    return list.slice(list.indexOf(duplicated) + 1, list.lastIndexOf(duplicated))
  }