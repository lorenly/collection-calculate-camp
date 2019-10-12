'use strict';

function get_union(collection_a, collection_b) {
  //write code here
  let unionResult = [];
  unionResult = collection_a.concat(collection_b);
  
  return unionResult.filter((element, index) => unionResult.indexOf(element) == index);
}

module.exports = get_union;

