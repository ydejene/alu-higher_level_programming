#!/usr/bin/node
const myArgs = process.argv.splice(2);
/* so we have to check the condition of the the element found on index 1 I believe since we spliced at index 2 */
if (myArgs.length === 0) {
  console.log('undefined is undefined');
} else if (myArgs.length === 1) {
  console.log(`${myArgs[0]} is undefined`);
} else {
  console.log(`${myArgs[0]} is ${myArgs[1]}`);
}
