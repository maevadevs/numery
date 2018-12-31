"use strict";

/**
 * @file
 * This is collection of useful helper functions for numbers manipulation in Javascript
 * Copyright: @maevadevs
 */

/* NUMBERS IN GENERAL */
/**********************/
// isValidNumber
// isFiniteNumber
// isFinitePositiveNumber
// isStrictFinitePositiveNumber
// isFiniteNegativeNumber
// isEvenNumber
// isOddNumber
// isNumberMultipleOf

/**
 * @function
 * Signature: isValidNumber(x: Any) => boolean
 * Verify that the given argument data type is in fact a valid number.
 * A valid number is any number between [-Infinity, Infinity], including the infinities, but not NaN.
 * To exclude infinities, use isFiniteNumber(x).
 * Return true if a valid number. false otherwise.
 **/
function isValidNumber (x) { return typeof x === 'number' && !Number.isNaN(x) }

/**
 * @function
 * Signature: isFiniteNumber(x: Any) => boolean
 * Verify that the argument is in fact a finite number.
 * A finite number is a valid number that is not an infinity (+ or -).
 * Return true if a finite number. false otherwise.
 **/
function isFiniteNumber (x) { return isValidNumber(x) && x !== Infinity && x !== -Infinity }

/**
 * @function
 * Signature: isFinitePositiveNumber(x: Any) => boolean
 *  Verify that the argument is in fact a finite and positive number, including 0
 *  A finite number is a valid number that is not an infinity (+ or -).
 *  Return true if a finite positive number. false otherwise.
 **/
function isFinitePositiveNumber (x) { return isValidNumber(x) && x >= 0 && x !== Infinity && x !== -Infinity }

/**
 * @function
 * Signature: isStrictFinitePositiveNumber(x: Any) => boolean
 *  Verify that the argument is in fact a finite and strictly positive number.
 *  A finite number is a valid number that is not an infinity (+ or -).
 *  Return true if a strict finite positive number. false otherwise.
 **/
function isStrictFinitePositiveNumber (x) { return isValidNumber(x) && x > 0 && x !== Infinity && x !== -Infinity }

/**
 * @function
 * Signature: isFiniteNegativeNumber(x: Any) => boolean
 *  Verify that the argument is in fact a finite and negative number
 *  A finite number is a valid number that is not an infinity (+ or -).
 *  Return true if a finite negative number. false otherwise.
 **/
function isFiniteNegativeNumber (x) { return isValidNumber(x) && x < 0 && x !== Infinity && x !== -Infinity }

/**
 * @function
 * Signature: isEvenNumber(x: Any) => boolean
 *  Verify if the argument is an even number.
 *  Return true if even. falso otherwise.
 */
function isEvenNumber (x) { return isValidNumber(x) && x % 2 === 0 }

/**
 * @function
 * Signature: isOddNumber(x: Any) => boolean
 *  Verify if the argument is an even number.
 *  Return true if odd. falso otherwise.
 */
function isOddNumber (x) { return isValidNumber(x) && x % 2 !== 0 }

/**
 * @function
 * Signature: isNumberMultipleOf(x: Any, y: Any) => boolean
 *  Verify if the first argument is a multiple of the second argument.
 *  NOTE: Second argument must be a strict positive number. return false otherwise.
 *  Return true if multiple. false otherwise.
 */
function isNumberMultipleOf (x, y) { return isValidNumber(x) && isFiniteNumber(y) && y > 0 && x % y !== 0 }

/* INTEGERS */
/************/
// isInteger
// isPositiveInteger
// isStrictPositiveInteger
// isNegativeInteger

/**
 * @function
 * Signature: isInteger(x: Any) => boolean
 *  Verify if a given number is a valid integer.
 *  Infinities are not integers.
 *  Return true if an integer. false otherwise.
 */
function isInteger (x) { return isFiniteNumber(x) && x % 1 === 0 }

/**
 * @function
 * Signature: isPositiveInteger(x: Any) => boolean
 *  Verify if a given number is a valid positive integer, including 0.
 *  Return true if a positive integer. false otherwise.
 */
function isPositiveInteger (x) { return isInteger(x) && x >= 0 }

/**
 * @function
 * Signature: isStrictPositiveInteger(x: Any) => boolean
 *  Verify if a given number is a valid positive integer, strictly not equal to 0.
 *  Return true if a strict positive integer. false otherwise.
 */
function isStrictPositiveInteger (x) { return isInteger(x) && x > 0 }

/**
 * @function
 * Signature: isNegativeInteger(x: Any) => boolean
 *  Verify if a given number is a valid negative integer.
 *  Return true if a negative integer. false otherwise.
 */
function isNegativeInteger (x) { return isInteger(x) && x < 0 }

// EXPORTS
// *******

module.exports = {
  // NUMBER IN GENERAL
  isValidNumber,
  isFiniteNumber,
  isFinitePositiveNumber,
  isStrictFinitePositiveNumber,
  isFiniteNegativeNumber,
  isEvenNumber,
  isOddNumber,
  isNumberMultipleOf,
  // INTEGERS
  isInteger,
  isPositiveInteger,
  isStrictPositiveInteger,
  isNegativeInteger
}
