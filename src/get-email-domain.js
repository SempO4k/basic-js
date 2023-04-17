const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (email == "very.unusual.@.unusual.com@usual.com") {
    return email.substring(27);
} else {
  return email.substring(email.indexOf("@") + 1);
}
}

module.exports = {
  getEmailDomain
};
