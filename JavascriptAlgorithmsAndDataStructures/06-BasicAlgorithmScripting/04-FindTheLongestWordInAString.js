function findLongestWordLength(str) {
  str = str.split(" ");
  let max_word_length = 0;
  for(let i=0; i<str.length; i++) {
    let current_word_lenght = str[i].length;
    if(current_word_lenght>max_word_length) {
      max_word_length = current_word_lenght;
    }
  }
  return max_word_length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");