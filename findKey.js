const findKey = function(object, calback) {
for (let key in object) {
  if (calback(object[key])) {
    return key
  }

  
}
}
 const names = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
console.log(findKey(names, x => x.stars === 2)); // => "noma"