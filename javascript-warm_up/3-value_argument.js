#!/usr/bin/node
const myArgs = process.argv.splice(2);
if (myArgs.length == 0) {
  console.log('No arguments');
} else {
  console.log(myArgs[0]);
}
