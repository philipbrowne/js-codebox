const firstFactorial = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * firstFactorial(n - 1);
  }
};
