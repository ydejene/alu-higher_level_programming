#!/usr/bin/node

exports.convertor = function (base) {
  return function (number) {
    console.log(number.toString(base));
  };
};

