'use strict';

function find_first_even(collection) {
  //write code here
  let findFirstElement = false;
  return collection.reduce((num, curr, index) => {
  	return (curr % 2 == 0 && findFirstElement == false) ? (
  													findFirstElement = true, curr 
  												) : num;
  });
  return collection.reduce((num, curr, index) => curr % 2  == 0? curr : num)
}

module.exports = find_first_even;

