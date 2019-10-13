'use strict';

function compute_chain_median(collection) {
  //write code here
  const collectionLength = collection.length;
  return collection.split('->')
  			.sort((num, cur) => num - cur)
  			.reduce((num, index) =>{
  				return collectionLength % 2 == 0 ? collection[collectionLength/2] : collection[collectionLength / 2 - 0.5 ] -1 + 0.5 ;
  			});
}

module.exports = compute_chain_median;
