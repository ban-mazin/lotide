const countLetters = function(string) {
 let result = {};
 for (let letters of string) {
   if (result[letters]) {
     result[letters] += 1 ;
   }
   else {
     result[letters] = 1 ;
   }
 }
 return result
}
console.log(countLetters("javascript"));