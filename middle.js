const middle = function(inputArray) {
  if (inputArray.length === 1 || inputArray.length === 2) {
    return [];
  } else if (inputArray.length % 2 === 0) {
    return [inputArray[inputArray.length / 2 - 1], inputArray[inputArray.length / 2]];
  } else {
    return [inputArray[inputArray.length / 2 - 0.5]];
  }
};
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]