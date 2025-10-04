#!/usr/bin/node
{
  let counter = 0; // declaring it outside the function so it won't reset value to zero when invoked rather persists
  exports.logMe = function (item) {
    console.log(`${counter++}: ${item}`);
  };
}

// using a property on the function

/* exports.logMe = function (item) {
  // initialize the counter property if it doesn't exist
  if (typeof exports.logMe.counter === undefined) {
    exports.logMe.counter = 0;
  }
  console.log(`${exports.logMe.counter++}: ${item}`);
}; */
