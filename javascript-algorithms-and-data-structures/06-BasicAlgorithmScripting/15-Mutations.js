function mutation(arr) {
  var start = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for(var i = 0; i < start.length; i++) {
    if(target.indexOf(start[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);