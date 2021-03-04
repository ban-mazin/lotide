const letterPositions = function(sentence) {
  let results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    }
    else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
