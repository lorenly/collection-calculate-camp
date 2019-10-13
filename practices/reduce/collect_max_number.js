'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((accu, cur) => cur < accu ? accu : cur);
}

module.exports = collect_max_number;
