'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(num =>{
  	return num > 26 ? "a" + String.fromCharCode((num - 26) + 96) : String.fromCharCode(num + 96); 
  });
};

module.exports = number_map_to_word_over_26;
