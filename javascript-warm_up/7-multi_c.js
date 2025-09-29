#!/usr/bin/node
let myArgs = process.argv[2];
let num = parseInt(myArgs);
let word = "C is fun";
if (isNaN(num)) {
  console.log("Missing number of occurrences");
} else {
  for (i = 1; i <= num; i++) {
    console.log(word);
  }
}
