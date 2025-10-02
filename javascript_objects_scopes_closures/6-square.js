#!/usr/bin/node

const Square = require('./5-square.js');

module.exports = class Square extends Square {
  constructor (size) {
    super(size);
  }

  charPrint (c = 'X') {
    for (let i = 0; i <= this.size; i++) {
      console.log(c.repeat(this.size));
    }
  }
};
