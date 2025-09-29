#!/usr/bin/node
const myArgs = process.argv.splice(2);
function add (a, b) {
  if (isNaN(a) || isNaN(b) || myArgs.length < 2) {
    return 'NaN';
  } else {
    const result = parseFloat(a) + parseFloat(b);
    return result;
  }
}
const test = add(myArgs[0], myArgs[1]);
console.log(test);
