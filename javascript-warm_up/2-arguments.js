#!/usr/bin/node
/* we have to use the process.argv a global object of javascript which has at least two element as an array (the first one being the path to the node executable at index 0 and the other one is the path to the js file being executed at index 1). So form index 2 and beyond the elements stored willthe arguments passed to the file through the command line and in our case we only need the arguments so we  use the splice method to acces element on index 2 and beyond like process.argv.splice(2) */
const myArgs = process.argv.splice(2);
if (myArgs.length === 0) {
  console.log('No argument');
} else if (myArgs.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
