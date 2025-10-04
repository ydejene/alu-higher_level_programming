#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let counter = 0;
  // we can use the for .. of to make a cleaner code
  for (const element of list) {
    // if condition to check searchElement === element if true update the counter
    if (element === searchElement) counter++;
  }
  return counter;
};
