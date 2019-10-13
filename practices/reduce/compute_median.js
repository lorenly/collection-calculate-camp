'use strict';

function compute_median(collection) {
  //write code here
  const collectionLength = collection.length;
  const median = collectionLength / 2;

  return collection.sort((num, cur) => num - cur)
  			.reduce(num =>{
  				return median % 2 == 0 ? collection[median] - 1 + 0.5 : parseInt(collection[Math.floor(median)]);
  			});
}

module.exports = compute_median;


