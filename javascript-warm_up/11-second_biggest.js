#!/usr/bin/node

// changing the string array inputs to Integers
const myArgs = process.argv.splice(2).map((n) => parseInt(n));
// removing duplicates from the array number collection
const unique = [...new Set(myArgs)];

if (unique.length < 2) {
  console.log(0);
} else {
  const sortedNum = unique.sort((a, b) => b - a); /* descending order */
  console.log(sortedNum[1]);
}
