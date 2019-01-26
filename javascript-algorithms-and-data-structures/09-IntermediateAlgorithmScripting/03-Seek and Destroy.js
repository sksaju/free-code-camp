function destroyer(arr, ...arg) {
    return arr.filter(item => !arg.includes(item));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);