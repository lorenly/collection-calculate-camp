'use strict';

function calculate_elements_sum(collection, element) {
  //write code here
  return collection.reduce((num, curr, index) => curr == element ? index : num)
}

module.exports = calculate_elements_sum;
