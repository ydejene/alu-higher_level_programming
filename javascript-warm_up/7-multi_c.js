#!/usr/bin/node
const myArgs = process.argv[2];
const num = parseInt(myArgs);
const word = 'C is fun';
if (isNaN(num)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
