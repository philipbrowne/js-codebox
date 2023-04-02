function countMe(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count += countHelper(i, string);
  }
  if (count > 0) return count;
  return 0;
}

function countHelper(start, string) {
  if (string[start] === 'x') return -1;
  if (start + 1 >= string.length) return 0;
  if (string.substring(start, start + 2) === 'Me') return 1;
  return 0;
}
