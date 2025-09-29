#!/usr/bin/node

// using the commonJS module system w/c is the default system used in server-side Node.js envts and is not natively supported in browsers
module.exports = function add (a, b) {
  return a + b;
};
