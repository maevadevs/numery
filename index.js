/**
 * @file
 * This is collection of useful helper functions for numbers manipulation in Javascript
 * Copyright: @maevadevs
 */

/* NUMBERS IN GENERAL */
/**********************/

/**
 * @function
 * Signature: isValidNumber(x: Any) => boolean
 *  Verify that the given argument data type is in fact a valid number.
 *  A valid number is any number between [-Infinity, Infinity], including the infinities, but not NaN.
 *  To exclude infinities, use isFiniteNumber(x).
 *  Return true if a valid number. false otherwise.
 **/
const isValidNumber = x => typeof x === 'number' && !Number.isNaN(x)

/**
 * @function
 * Signature: isFiniteNumber(x: Any) => boolean
 *  Verify that the argument is in fact a finite number.
 *  A finite number is a valid number that is not an infinity (+ or -).
 *  Return true if a finite number. false otherwise.
 **/
const isFiniteNumber = x => isValidNumber(x) && x !== Infinity && x !== -Infinity

/**
 * @function
 * Signature: isFinitePositiveNumber(x: Any) => boolean
 *  Verify that the argument is in fact a finite and positive number, including 0
 *  A finite number is a valid number that is not an infinity (+ or -).
 *  Return true if a finite positive number. false otherwise.
 **/
const isFinitePositiveNumber = x => isValidNumber(x) && x >= 0 && x !== Infinity && x !== -Infinity

/**
 * @function
 * Signature: isStrictFinitePositiveNumber(x: Any) => boolean
 *  Verify that the argument is in fact a finite and strictly positive number.
 *  A finite number is a valid number that is not an infinity (+ or -).
 *  Return true if a strict finite positive number. false otherwise.
 **/
const isStrictFinitePositiveNumber = x => isValidNumber(x) && x > 0 && x !== Infinity && x !== -Infinity

/**
 * @function
 * Signature: isFiniteNegativeNumber(x: Any) => boolean
 *  Verify that the argument is in fact a finite and negative number
 *  A finite number is a valid number that is not an infinity (+ or -).
 *  Return true if a finite negative number. false otherwise.
 **/
const isFiniteNegativeNumber = x => isValidNumber(x) && x < 0 && x !== Infinity && x !== -Infinity

/**
 * @function
 * Signature: isEvenNumber(x: Any) => boolean
 *  Verify if the argument is an even number.
 *  Return true if even. falso otherwise.
 */
const isEvenNumber = x => isValidNumber(x) && x % 2 === 0

/**
 * @function
 * Signature: isOddNumber(x: Any) => boolean
 *  Verify if the argument is an even number.
 *  Return true if odd. falso otherwise.
 */
const isOddNumber = x => isValidNumber(x) && x % 2 !== 0

/**
 * @function
 * Signature: isNumberMultipleOf(x: Any, y: Any) => boolean
 *  Verify if the first argument is a multiple of the second argument.
 *  NOTE: Second argument must be a strict positive number. return false otherwise.
 *  Return true if multiple. false otherwise.
 */
const isNumberMultipleOf = (x, y) => isValidNumber(x) && isFiniteNumber(y) && y > 0 && x % y !== 0

/* INTEGERS */
/************/

/**
 * @function
 * Signature: isInteger(x: Any) => boolean
 *  Verify if a given number is a valid integer.
 *  Infinities are not integers.
 *  Return true if an integer. false otherwise.
 */
const isInteger = x => isFiniteNumber(x) && x % 1 === 0

/**
 * @function
 * Signature: isPositiveInteger(x: Any) => boolean
 *  Verify if a given number is a valid positive integer, including 0.
 *  Return true if a positive integer. false otherwise.
 */
const isPositiveInteger = x => isInteger(x) && x >= 0

/**
 * @function
 * Signature: isStrictPositiveInteger(x: Any) => boolean
 *  Verify if a given number is a valid positive integer, strictly not equal to 0.
 *  Return true if a strict positive integer. false otherwise.
 */
const isStrictPositiveInteger = x => isInteger(x) && x > 0

/**
 * @function
 * Signature: isNegativeInteger(x: Any) => boolean
 *  Verify if a given number is a valid negative integer.
 *  Return true if a negative integer. false otherwise.
 */
const isNegativeInteger = x => isInteger(x) && x < 0

// EXPORT
// ******

module.exports = {
  // Numbers in general
  isValidNumber,
  isFiniteNumber,
  isFinitePositiveNumber,
  isStrictFinitePositiveNumber,
  isFiniteNegativeNumber,
  isEvenNumber,
  isOddNumber,
  isNumberMultipleOf,
  // Integers
  isInteger,
  isPositiveInteger,
  isStrictPositiveInteger,
  isNegativeInteger
}
