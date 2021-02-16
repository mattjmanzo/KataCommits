// Two To One

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Solution 1 

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// Solution 2 

function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }