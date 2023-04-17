const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value = " ") {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.slice().length - 1
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.slice().reduce((acc, elem, i) => {
      if (i === 0 && this.chain.slice().length == 1) {
        return acc + `( ${elem} )`;
      }
      if (i === 0) {
        return acc + `( ${elem} )~`;
      }
      if (i === this.chain.slice().length - 1) {
        return acc + `~( ${elem} )`;
      }
      return acc + `~( ${elem} )~`;
    }, ``);
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
