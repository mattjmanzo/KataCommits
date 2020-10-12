// Right in the Centre 

// Given a sequence of characters, does "abc" appear in the CENTER of the sequence? The sequence of characters could contain more than one "abc". To define CENTER, the number of characters in the sequence to the left and right of the "abc" (which is in the middle) must differ by at most one. If it is in the CENTER, return True. Otherwise, return False.

// Solution 1 

function isInMiddle(s) {
    return s.slice(4) ? isInMiddle(s.slice(1,-1)) : s.includes('abc')
  }

// Solution 2 

function isInMiddle(seq) {
  let mid = seq.length / 2;

  if (seq.length % 2 == 0) {
    return (
      seq.substring(mid - 1, mid + 2) == "abc" ||
      seq.substring(mid - 2, mid + 1) == "abc"
    );
  } else {
    return seq.substring(mid - 1, mid + 2) == "abc";
  }
}