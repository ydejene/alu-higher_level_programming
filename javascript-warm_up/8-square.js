#!/usr/bin/node
const myArgs = process.argv[2];
const num = parseInt(myArgs);
let output = '';

if (isNaN(num)) {
  console.log('Missing size');
} else {
  result = num ** 2;
  for (i = 1; i <= result; i++) {
    output += 'X';
    if ((output.length === num)) {
      console.log(output);
      output = '';
    }
  }
}
