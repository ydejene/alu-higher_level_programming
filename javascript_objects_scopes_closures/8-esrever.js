#!/usr/bin/node

exports.esrever = function (list) {
  const reversedArray = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedArray.push(list[i]);
  }
  return reversedArray;
};

/* if we were allowed to use reverse() method we could do:
 exports.esrever = function (list) {
 we are using slice to creates a shallow copy of list so the original
 array remains unchanged (not modified)
  return list.slice().reverse()
} */
