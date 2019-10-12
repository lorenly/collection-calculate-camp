'use strict';

function get_letter_interval(number_a, number_b) {
  //write code here
  let min = Math.min(number_a, number_b);
  let max = Math.max(number_a, number_b);
  let letterInterval = []
  
  for(min; min <= max; min++){
  	letterInterval.push(min);
  }

  letterInterval = letterInterval.map(ascii => String.fromCharCode(ascii+96));
  
  return (number_a <= number_b) ? letterInterval : letterInterval.reverse();
}

module.exports = get_letter_interval;
