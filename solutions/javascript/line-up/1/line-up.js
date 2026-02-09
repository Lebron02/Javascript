//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let String = number.toString();
  let ordinalNumeral = String.slice(-1);
  let lastTwo = String.slice(-2);
  let result = null;
  if(lastTwo == 11 || lastTwo == 12 || lastTwo == 13){
    result = `${number}th`;
  } else if(ordinalNumeral == '1') {
    result = `${number}st`;
  } else if(ordinalNumeral == '2') {
    result = `${number}nd`;
  } else if(ordinalNumeral == '3') {
    result = `${number}rd`;
  } else {
    result = `${number}th`;
  }     
  return `${name}, you are the ${result} customer we serve today. Thank you!`
};
