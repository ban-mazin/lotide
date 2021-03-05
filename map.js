const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback[item]);
    
    
  }
  return results;
}

console.log(map(words, words.filter));
const assertArraysEqual  = function (arrayA, arrayB) {


  for (let i = 0; i < arrayA.length; i++){

  
  if (arrayA[i] !== arrayB[i]) {
    return false
  } 
    
}
  return true
};