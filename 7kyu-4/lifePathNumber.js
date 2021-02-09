// Life Path Number 

// Solution 1 

function lifePathNumber(dateOfBirth) {
    return dateOfBirth.replace(/\D/g,'') % 9 || 9;
  }

// Solution 2 

function lifePathNumber(dateOfBirth) {
  var num = dateOfBirth.split("-").join("");
  
  do{
    num = (""+num).split("").reduce((p,c) => +p+ +c);
  }while(num > 9);
  
  return num;
}