function sumAll(arr) {
  let min_num = Math.min(...arr);
  let max_num = Math.max(...arr);
  let sum = 0;
  for(let i=min_num; i<=max_num; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);