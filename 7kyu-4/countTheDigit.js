// Count The Digit 

// Solution 1 

function nbDig(n, d) {
    var res=0;
        for (var g=0;g<=n;g++){
          var square=(g*g+"").split("");
          square.forEach((s)=>s==d?res++:null)
        }return res;
    }

// Solution 2 

function nbDig(n, d) {
    var o = '';
      for(var i = 0; i <= n; i++){
        o += Math.pow(i, 2);
      }
    return o.split(d).length-1
  }