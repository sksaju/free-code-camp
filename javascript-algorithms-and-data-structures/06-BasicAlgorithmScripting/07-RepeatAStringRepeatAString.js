function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num<0) {
    return "";
  }
  let new_str = "";
  for(let i=0; i<num; i++) {
    new_str += str;
  }
  return new_str;
}

console.log(repeatStringNumTimes("*", 3));