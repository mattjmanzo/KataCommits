// Lost Number in Number Sequence 

// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Solution 1 

function findDeletedNumber(arr, mixArr) {
    if(arr.length === mixArr.length) return 0;
    for(var k in arr)
      if(mixArr.indexOf(arr[k]) === -1)
        return arr[k];
    return 0;
  }