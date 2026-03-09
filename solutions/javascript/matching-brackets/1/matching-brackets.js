//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (string) => {
  const openers = ["(","{","["]
  const closers = {
      ")" : "(",
      "}" : "{",
      "]" : "[",
  }
  let isValid = true;
  let listOfOpeners = [];
  let ourString1 = [...string];
  for(const char of ourString1){
    if(openers.includes(char)){
      listOfOpeners.push(char);
    } else if(closers[char]) {
      if(closers[char] !== listOfOpeners.pop()){
        isValid = false;
        return false;
      }
    }
  };
  return isValid && listOfOpeners.length === 0;
};