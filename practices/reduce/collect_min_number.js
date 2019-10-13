'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce((accu, cur) => cur < accu ? cur : accu);
}

module.exports = collect_min_number;

