//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let numberArray = [...number.toString()].map(Number)
  let sizeOfNumber = numberArray.length
  console.log(sizeOfNumber);
  console.log(numberArray);
  let sumOfNumbers = BigInt(numberArray.reduce((total, x) => total += BigInt(x) ** BigInt(sizeOfNumber), 0n));
  return sumOfNumbers === BigInt(number);
};
