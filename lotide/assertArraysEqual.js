const assertArraysEqual  = function (arrayA, arrayB) {


  for (let i = 0; i < arrayA.length; i++){

  
  if (arrayA[i] !== arrayB[i]) {
    return false
  } 
    
}
  return true
};
console.log(assertArraysEqual(['novel'], ['story'])) // => true

