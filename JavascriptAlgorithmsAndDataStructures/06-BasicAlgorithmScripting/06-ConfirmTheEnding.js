function confirmEnding(str, target) {
  str = str.split(" ");
  let regrxp = new RegExp(target+'$');
  return regrxp.test(str[str.length-1]);
}

console.log(confirmEnding("Open sesame", "game"));