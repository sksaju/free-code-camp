function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var newArray = arr.sort(function(a, b) { return a > b; });
  for(var i=0; i<newArray.length; i++){
    if(num<=newArray[i]){
      return i;
    }
  }
  return newArray.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));