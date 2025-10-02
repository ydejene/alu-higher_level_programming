#!/usr/bin/node

const ParentSquare = require('./5-square.js');

module.exports = class Square extends ParentSquare {
  charPrint (c = 'X') {
    for (let i = 1; i <= this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
};
