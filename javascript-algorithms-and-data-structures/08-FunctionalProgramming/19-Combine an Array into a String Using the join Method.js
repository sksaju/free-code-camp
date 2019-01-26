function sentensify(str) {
  // Add your code below this line
  let arr = str.split(/\W/);
  return arr.join(" ");
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");