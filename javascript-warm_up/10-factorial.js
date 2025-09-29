#!/usr/bin/node

function factorial (n) {
  // base case and handling invalid input
  if (isNaN(n) || n === 0 || n === 1) {
    return 1;
  }
  // recursive step
  return n * factorial(n - 1);
}

const num = parseInt(process.argv[2]);
console.log(factorial(num));
