'use strict';

function calculate_elements_sum(collection, element) {
  //write code here
  let findElement = false;
  return collection.reduce((num, curr, index) => {
  	return (curr === element && findElement == false) ? (
  													findElement = true, index 
  												) : num;
  });

}

module.exports = calculate_elements_sum;

