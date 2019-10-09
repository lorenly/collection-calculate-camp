'use strict';

function choose_common_elements(collection_a, collection_b) {

  //write code here
  return collection_a.filter(element => collection_b.indexOf(element) >= 0);
}

module.exports = choose_common_elements;
