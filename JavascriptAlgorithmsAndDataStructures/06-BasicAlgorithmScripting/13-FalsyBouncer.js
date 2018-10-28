function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var check = arr.filter(function(i) {
    return Boolean(i);
  });

  return check;
}

console.log(bouncer([7, "ate", "", false, 9]));