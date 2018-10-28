function largestOfFour(arr) {
  // You can do this!
  let new_arr = []
  for(let i=0; i<arr.length; i++) {
    let max_num = arr[i][0];
    for(let j=0; j<arr[i].length; j++) {
      if(arr[i][j]>max_num) {
        max_num = arr[i][j];
      }
    }
    new_arr.push(max_num);
  }
  return new_arr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));