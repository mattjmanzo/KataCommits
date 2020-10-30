// Reverser 

// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Solution 1 

function reverse(n){
    let rev = 0;
    while (n) {
        rev = rev * 10 + n % 10;
        n = Math.floor(n/10);
    }
    return rev;
}

// Solution 2 

function reverse(n){
    let number = 0;
    if (n > 0){
      let i = 10;
      let count = 1;
      let n1 = n % 10;
      let n2 = n;
      while(~~(n2/10) > 0){
        n2 = ~~(n2 / 10);
        count = count * 10;
      }
      
      return (n % 10) * count + reverse(~~(n/10));
    }
    return number;
  }