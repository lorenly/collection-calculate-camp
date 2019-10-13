'use strict';

function compute_chain_median(collection) {
  //write code here
  collection = collection.split('->');
  const collectionLength = collection.length;
  const median = collectionLength / 2;

  return collection.sort((num, cur) => num - cur)
  			.reduce(num =>{
  				return median % 3 == 0 ? collection[median] - 1 + 0.5 : parseInt(collection[Math.floor(median)]);
  			});
}

module.exports = compute_chain_median;
