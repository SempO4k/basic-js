const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (arr == []) return [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let array = [...arr];

  array.map((elem) => {
    if (elem == "--discard-prev") {
      if (array.indexOf(elem) == 0) {
        array.splice(array.indexOf(elem), 1);
      } else {
        array.splice(array.indexOf(elem) - 1, 2);
      }
    }
    if (elem == "--discard-next") {
      if (array.indexOf(elem) == array.length - 1) {
        array.splice(array.indexOf(elem), 1);
      } else {
        array.splice(array.indexOf(elem), 2);
      }
    }
    if (elem == "--double-prev") {
      if (array.indexOf(elem) == 0) {
        array.splice(array.indexOf(elem), 1);
      } else {
        array.splice(array.indexOf(elem), 1, array[array.indexOf(elem) - 1]);
      }
    }
    if (elem == "--double-next") {
      if (array.indexOf(elem) == array.length - 1) {
        array.splice(array.indexOf(elem), 1);
      } else {
        array.splice(array.indexOf(elem), 1, array[array.indexOf(elem) + 1]);
      }
    }
  });
  return array;
}

module.exports = {
  transform,
};
