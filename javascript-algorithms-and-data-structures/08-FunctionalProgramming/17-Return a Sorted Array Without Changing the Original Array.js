var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let new_arr = arr.concat();
  return new_arr.sort();
  // Add your code above this line
}
console.log(nonMutatingSort(globalArray));