'use strict';

function get_letter_interval_2(number_a, number_b) {
  //write code here
  let min = Math.min(number_a, number_b);
  let max = Math.max(number_a, number_b);
  const maxAscii = 122 //z
  let letterInterval = [];

  for(min; min <= max; min++){
  	letterInterval.push(min);
  }

  letterInterval = letterInterval.map((ascii, index) => { 
  	ascii += 70;
  	return index < 7 ? ascii+26 > maxAscii ? 'a' + String.fromCharCode(ascii) : 
  		String.fromCharCode(ascii + 26) : 
  		ascii > maxAscii ? 'b' + String.fromCharCode(ascii - 26) :
  		'a' + String.fromCharCode(ascii) 
  		 
  });

  return number_a <= number_b ? letterInterval : letterInterval.reverse();
}

module.exports = get_letter_interval_2;

