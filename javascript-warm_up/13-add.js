#!/usr/bin/node

// using the commonJS module system w/c is the default system used in server-side Node.js envts and is not natively supported in browsers
function add (a, b) {
  return parseInt(a) + parseInt(b);
}

module.exports = { add };
