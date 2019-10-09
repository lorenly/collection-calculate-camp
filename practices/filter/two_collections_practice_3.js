'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //write code here
  let divisibleInt = []
  collection_a.forEach(elementA => {
  	if(collection_b.filter(elementB => elementA % elementB === 0).length > 0)
  		divisibleInt.push(elementA);
  });
  return divisibleInt;
}

module.exports = choose_divisible_integer;
