function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(typeof bool === 'boolean') {
    return true;
  }
  return false;
}

console.log(booWho(null));