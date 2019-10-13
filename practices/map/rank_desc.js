'use strict';
var rank_desc = function(collection){
  return collection.sort((num, cur) => num - cur);
};

module.exports = rank_desc;
