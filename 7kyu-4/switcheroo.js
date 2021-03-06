// Switcheroo 

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Solution 1 

const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")

// Solution 2 

function switcheroo(x){
    return x.split('').map(function(e){
      if (e =='b')return 'a';
      if (e == 'a') return 'b';
      if(e=='c') return 'c'
    }).join('');
  }