// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let string1 = String(array1.join(""));
  let string2 = String(array2.join(""));
  console.log(string1)
  let result = Number(string1) + Number(string2);
  return result;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let reversed = value.toString().split('').reverse().join('');
  if(value === parseInt(reversed)){
    return true
  } else {
    return false
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let number = Number(input);
  if(!input){
    return 'Required field';
  }
  if(isNaN(number) || number === 0) {
    return 'Must be a number besides 0';
  } else {
    return ''
  }
}
