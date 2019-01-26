function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num<str.length) {
    var str = str.substr(0, num)+"...";
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));