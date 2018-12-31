# Numery

Numery is a collection of useful helper functions for numbers manipulation in Javascript

## Installation

```
yarn add numery
```

## Usage

```js
const { isValidNumber } = require('numery')
```

## Contents

- [For Numbers in General](#numbers-in-general)
  - [`isValidNumber`](#isValidNumber)
  - [`isEvenNumber`](#isEvenNumber)
  - [`isOddNumber`](#isOddNumber)
  - [`isFiniteNumber`](#isFiniteNumber)
  - [`isFinitePositiveNumber`](#isFinitePositiveNumber)
  - [`isStrictFinitePositiveNumber`](#isStrictFinitePositiveNumber)
  - [`isFiniteNegativeNumber`](#isFiniteNegativeNumber)
  - [`isNumberMultipleOf`](#isNumberMultipleOf)
- [For Integers](#for-integers)
  - [`isInterger`](#isInteger)
  - [`isPositiveInteger`](#isPositiveInteger)
  - [`isStrictPositiveInteger`](#isStrictPositiveInteger)
  - [`isNegativeInteger`](#isNegativeInteger)

## For Numbers in General<a name="numbers-in-general"></a>

### `isValidNumber`<a name="isValidNumber"></a>

- Signature: `isValidNumber(x: Any) => boolean`
- Verify that the given argument data type is in fact a valid number.
- A valid number is any number between `[-Infinity, Infinity]`, including the infinities, but not `NaN`.
- To exclude infinities, use `isFiniteNumber(x)` instead
- Return `true` if a valid number. `false` otherwise.

### `isEvenNumber`<a name="isEvenNumber"></a>

- Signature: `isEvenNumber(x: Any) => boolean`
- Verify if the argument is an even number.
- Return `true` if even. `false` otherwise.

### `isOddNumber`<a name="isOddNumber"></a>

- Signature: `isOddNumber(x: Any) => boolean`
- Verify if the argument is an odd number.
- Return `true` if odd. `false` otherwise.

### `isFiniteNumber`<a name="isFiniteNumber"></a>

- Signature: `isFiniteNumber(x: Any) => boolean`
- Verify that the argument is in fact a finite number.
- A finite number is a valid number that is not an infinity (+ or -).
- Return `true` if a finite number. `false` otherwise.

### `isFinitePositiveNumber`<a name="isFinitePositiveNumber"></a>

- Signature: `isFinitePositiveNumber(x: Any) => boolean`
- Verify that the argument is in fact a finite and positive number, including `0`
- A finite number is a valid number that is not an infinity (+ or -).
- Return `true` if a finite positive number. `false` otherwise.

### `isStrictFinitePositiveNumber`<a name="isStrictFinitePositiveNumber"></a>

- Signature: `isStrictFinitePositiveNumber(x: Any) => boolean`
- Verify that the argument is in fact a finite and strictly positive number, not including `0`
- A finite number is a valid number that is not an infinity (+ or -).
- Return `true` if a strict finite positive number. `false` otherwise.

### `isFiniteNegativeNumber`<a name="isFiniteNegativeNumber"></a>

- Signature: `isFiniteNegativeNumber(x: Any) => boolean`
- Verify that the argument is in fact a finite and negative number
- A finite number is a valid number that is not an infinity (+ or -).
- Return `true` if a finite negative number. `false` otherwise.

### `isNumberMultipleOf`<a name="isNumberMultipleOf"></a>

- Signature: `isNumberMultipleOf(x: Any, y: Any) => boolean`
- Verify if the first argument is a multiple of the second argument.
- NOTE: Second argument must be a strict positive number. return false otherwise.
- Return `true` if multiple. `false` otherwise.

## For Integers<a name="for-integers"></a>

### `isInteger`<a name="isInteger"></a>

- Signature: `isInteger(x: Any) => boolean`
- Verify if a given number is a valid integer.
- Infinities are not integers.
- Return `true` if an integer. `false` otherwise.

### `isPositiveInteger`<a name="isPositiveInteger"></a>

- Signature: `isPositiveInteger(x: Any) => boolean`
- Verify if a given number is a valid positive integer, including 0.
- Return `true` if a positive integer. `false` otherwise.

### `isStrictPositiveInteger`<a name="isStrictPositiveInteger"></a>

- Signature: `isStrictPositiveInteger(x: Any) => boolean`
- Verify if a given number is a valid positive integer, strictly not equal to `0`.
- Return `true` if a strict positive integer. `false` otherwise.

### `isNegativeInteger`<a name="isNegativeInteger"></a>

- Signature: `isNegativeInteger(x: Any) => boolean`
- Verify if a given number is a valid negative integer.
- Return `true` if a negative integer. `false` otherwise.
