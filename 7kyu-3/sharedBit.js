// Shared Bit Counter 

// Solution 1 

function sharedBits(a, b) {
    return (a & b).toString(2).replace(/0/g, '').length > 1
    }