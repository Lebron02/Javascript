/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if(timer === 0){
    return 'Lasagna is done.';
  } else if(timer === undefined){
    return 'You forgot to set the timer.';
  } else {
    return 'Not done, please wait.';
  }
}

export function preparationTime(layers, avgPreparationTime = 2) {
  return layers.length * avgPreparationTime;
}

export function quantities(arrayOfLayers) {
  let weightOfNoodles = 0;
  let sizeOfSauce = 0;
  for(let i in arrayOfLayers){
    if(arrayOfLayers[i] === 'noodles'){
      weightOfNoodles += 50;
    } else if(arrayOfLayers[i] === 'sauce'){
      sizeOfSauce += 0.2;
    }
  }
  return {noodles: weightOfNoodles, sauce: sizeOfSauce};
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, portions = 2) {
  let scaledRecipe = {};
  for(let i in recipe){
    scaledRecipe[i] = recipe[i] * portions / 2;
  }
  return scaledRecipe;
}



