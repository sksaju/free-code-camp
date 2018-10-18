const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr
    .filter(item => item>0 && item==parseInt(item))
    .map(item => item * item);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);