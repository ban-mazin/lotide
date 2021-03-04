const findKeyByValue = function (object, value){
   for (let key in object) {
    //console.log(key);
    if (object[key] === (value)) {
      return key;
    }

  }



}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log((findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log((findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
