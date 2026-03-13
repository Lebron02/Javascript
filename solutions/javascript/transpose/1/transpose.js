//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  const numberOfRowsToBuild = input.length;
  let lengthOfTheLongestWord = input.reduce((acc, currValue) => {
    console.log(currValue);
    if(currValue.length > acc) acc = currValue.length;
    return acc;
  }, 0)
  let transposedArray = []
  if(lengthOfTheLongestWord === 0) return [];
  for(let i = 0; i < lengthOfTheLongestWord; i++){ 
    let wordToAdd = '';
    for(let j = 0; j < numberOfRowsToBuild; j++){
      if(input[j].charAt(i) === ''){
        let slicedInput = input.slice(j + 1);
        let hasMoreRowsAhead = slicedInput.some((rows) => rows.length > i);
        if(hasMoreRowsAhead) wordToAdd += ' '
      } else {
        wordToAdd += input[j].charAt(i)
      }
    }
    transposedArray.push(wordToAdd);
  }
  return transposedArray
};
