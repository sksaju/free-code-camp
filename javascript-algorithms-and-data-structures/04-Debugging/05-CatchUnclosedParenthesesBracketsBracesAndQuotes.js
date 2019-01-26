let myArray = [1, 2, 3];
let previous, current;
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);