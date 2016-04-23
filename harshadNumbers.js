/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( number ) {
      // Your implementation goes here
      var sum = 0;
      var original = number;
      while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
      }
      return original % sum === 0;
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( number ) {
      // Your implementation goes here
      var test = number + 1;
      while (!Harshad.isValid(test)) {
        test++;
      }
      return test;

    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function( count, start ) {
      // Your implementation goes here
      var result = [];
      var input = start || 0;
      while (result.length < count) {
        input = Harshad.getNext(input);
        result.push(input);
      }

      return result;
    }
  };

} () );