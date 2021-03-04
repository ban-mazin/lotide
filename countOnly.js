

const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (let item of allItems) {
    if(itemsToCount[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    
    }
  }
return result;


};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log((result1["Jason"], 1));
console.log((result1["Karima"], undefined));
console.log((result1["Fang"], 2))
console.log((result1["Agouhanna"], undefined));