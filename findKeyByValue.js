const findKeyByValue = function (key, value) {


}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log((findKeyByValue.keys(bestTVShowsByGenre, "The Wire")), "drama");
console.log(findKeyByValue.keys(bestTVShowsByGenre, "That '70s Show"), undefined);