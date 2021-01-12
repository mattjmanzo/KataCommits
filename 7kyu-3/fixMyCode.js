// Fix My Code 

// Solution 1 

const $ = require('lodash');
function solve( str ){
    return ( $.zip( str.split(''), str.split('').reverse() )
              .map( el => ( el[0].charCodeAt(0) ) - ( el[1].charCodeAt(0) ) ) )
                .every( el => [-2,0,2].includes(el) );
}