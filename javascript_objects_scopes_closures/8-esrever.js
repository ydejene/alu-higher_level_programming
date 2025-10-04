#!/usr/bin/node

exports.esrever = function (list) {
  let reversedArray = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedArray.push(list[i]);
  }
  return reversedArray;
};
