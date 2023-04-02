const longest = (string) => {
  if (string.length === 0) return 0;
  let max = 0;
  let current = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      current++;
    } else {
      if (current > max) max = current;
      current = 1;
    }
  }
  if (current > max) max = current;
  return max;
};
