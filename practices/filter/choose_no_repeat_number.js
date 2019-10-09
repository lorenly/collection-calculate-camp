'use strict';

function choose_no_repeat_number(collection) {

  //write code here
  return collection.filter((index, num, self) => self.indexOf(index) === num);
}

module.exports = choose_no_repeat_number;
