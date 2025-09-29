#!/usr/bin/node
let myArgs = process.argv.splice(2);
let num = parseInt(myArgs[0]);
if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}
