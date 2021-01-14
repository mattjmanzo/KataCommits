// Fix My Code 

// Solution 1 

const $ = require('lodash');
function solve( str ){
    return ( $.zip( str.split(''), str.split('').reverse() )
              .map( el => ( el[0].charCodeAt(0) ) - ( el[1].charCodeAt(0) ) ) )
                .every( el => [-2,0,2].includes(el) );
}

// Solution 2 

const _ = require('lodash');
function solve(s){
    return (_.zip(s.split(""), s.split("").reverse()).map(e=>(e[0].charCodeAt(0)) - (e[1].charCodeAt(0)))).every(e=>[-2,0,2].includes(e));
}