const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++){

  if (array1[i] !== array2[i]) {
    return false
  } 
    
}
  return true
}

const eqObjects = function(object1, object2) {
  const object1key = Object.keys(object1);
  const object2key = Object.keys(object2);

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  for (let value of object1key) {
    if (Array.isArray(object1key[value]) && Array.isArray(object2key[value])) {
      if (!eqArrays(object1key, object2key)) {
        return false
      }
      else {
        if (object1key !== object2key) {
          return false
        }
      }
    }
  }
  return true
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false