// Valid Spacing 

// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False. For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

// Solution 1 

const validSpacing=s=>s.replace(/\s+/g," ").trim()==s;

// Solution 2 

function validSpacing(s) {
    return s.trim() == s && !s.includes("  ");
  }