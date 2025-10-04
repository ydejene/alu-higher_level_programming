#!/usr/bin/node
{
  let counter = 0; // declaring it outside the function so it won't reset value to zero when invoked rather persists
  exports.logMe = function (item) {
    console.log(`${counter}: ${item}`);
    counter++;
  };
}
