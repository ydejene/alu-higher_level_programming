#!/usr/bin/node
function factorial(num) {
    if (isNaN(num) || num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

const myArgs = process.argv[2];
const inputNum = parseFloat(myArgs);
const test = factorial(inputNum);
console.log(test);
