'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  return styles.reduce((prev, el) => {
    if (el.trim() !== '' && el.trim() !== ' ') {
      const [key, value] = el.split(':');

      return {
        ...prev,
        [key.trim()]: value.trim(),
      };
    }

    return { ...prev };
  }, {});
}
module.exports = convertToObject;
