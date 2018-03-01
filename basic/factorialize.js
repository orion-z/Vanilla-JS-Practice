function factorialize(num) {
  // construct loop to run num times
  for (var i = num; i > 0; i--) {
    // factor is complete if it is being multiplied by 1
    if (i == 1) {
      return num;
    }
    // else multiply it by the last multiplicand minus 1
    num *= i - 1;
  }
  if (num == 0) {
    // 0! always equals 1
    return 1;
  }
}

factorialize(5);
