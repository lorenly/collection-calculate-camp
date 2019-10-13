'use strict';

function find_last_even(collection) {
  //write code here
  return collection.reduce((num, curr, index) => curr % 2  == 0? curr : num)
}

module.exports = find_last_even;
