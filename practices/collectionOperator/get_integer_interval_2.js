'use strict';

function get_integer_interval_2(number_a, number_b) {
  //write code here
  let min = Math.min(number_a, number_b);
  let max = Math.max(number_a, number_b);
  let intervalResult = [];

  for(min; min <= max; min++){
  	intervalResult.push(min);
  }
  
  intervalResult = intervalResult.filter(num => num % 2 == 0);

  return number_a < number_b ? intervalResult : intervalResult.reverse();

}

module.exports = get_integer_interval_2;
