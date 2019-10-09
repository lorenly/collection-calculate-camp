'use strict';

function grouping_count(collection) {

  //write code here
  let uniqueElement = collection.filter((index, num, self) => self.indexOf(index) === num);
  let groupElement = {}
  
  for(let key of uniqueElement)
  	groupElement[key] = collection.filter(num => num === key).length;
  
  return groupElement;
}

module.exports = grouping_count;
