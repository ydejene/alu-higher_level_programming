#!usr/bin/env node
let myArgs = process.argv.splice(2);
function add(a, b) {
  if (isNaN(a) || isNaN(b) || myArgs.length < 2) {
    return "isNaN";
  } else {
    result = parseFloat(a) + parseFloat(b);
    return result;
  }
}
test = add(myArgs[0], myArgs[1]);
console.log(test);
