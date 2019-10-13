'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.reduce((accu, cur) => collection_b.includes(cur) ? true : false);
}

module.exports = compare_collections;


