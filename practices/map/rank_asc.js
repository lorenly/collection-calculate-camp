'use strict';
var rank_asc = function(collection){
  return collection.sort((num, cur) => cur - num);
};

module.exports = rank_asc;
