// Life Path Number 

// Solution 1 

function lifePathNumber(dateOfBirth) {
    return dateOfBirth.replace(/\D/g,'') % 9 || 9;
  }