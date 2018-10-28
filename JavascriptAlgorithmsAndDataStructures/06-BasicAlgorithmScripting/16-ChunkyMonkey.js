function chunkArrayInGroups(arr, size) {
  // Break it up.
  var group = [];
  var position = 0;
  
  while(position < arr.length) {
    group.push(arr.slice(position, position+=size));
  }
  return group;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));