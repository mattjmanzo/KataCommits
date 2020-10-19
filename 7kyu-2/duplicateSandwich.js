// Duplicate Sandwich 

// 

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