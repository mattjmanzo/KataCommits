// Peak Array Index

// Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.

// Solution 1

function peak(arr) {
  var sum1 = 0;
  var sum2 = 0;
  var last = arr.length - 1;
  var first = 0;
  while (first < last) {
    if (sum1 > sum2) {
      sum2 += arr[last];
      last--;
    } else if (sum1 <= sum2) {
      sum1 += arr[first];
      first++;
    }
  }
  return last == first && sum1 == sum2 ? last : -1;
}

// Solution 2

function peak(arr) {
  for (
    var i = 0, l = 0, r = arr.reduce((a, b) => a + b, 0);
    i < arr.length;
    i++
  ) {
    r -= arr[i];
    if (l == r) return i;
    l += arr[i];
  }
  return -1;
}
