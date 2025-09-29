#!/usr/bin/node
const myArgs = process.argv.splice(2);
if (!myArgs[0]) {
  console.log('No arguments');
} else {
  console.log(myArgs[0]);
}
