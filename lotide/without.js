const without = function(array1,array2) {
  const newArray = [...array1];
  for (let i = 0; i < newArray.length; i++) {
    for (let x = 0; x < array2.length; x++) {
      if (newArray[i] === array2[x]) {
        newArray.splice(i, 1);
      }
    }
  }
  console.log(newArray);
};
// test cases
without([1, 2, 3], [1, 2]); // => [2, 3]
without(["1", "2", "3"], [1, "2", "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 