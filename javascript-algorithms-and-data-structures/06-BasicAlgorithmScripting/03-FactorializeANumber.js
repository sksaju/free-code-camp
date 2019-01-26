function factorialize(num) {
    if (num < 0) { // If the number is less than 0, reject it.
          return -1;
    } else if (num == 0) {  // If the number is 0, its factorial is 1.
        return 1;
    }  else { // Otherwise, call the recursive procedure again
      return (num * factorialize(num - 1));
    }
  }
  
  factorialize(5);