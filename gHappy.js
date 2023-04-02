const gHappy = (s) => {
  if (s.length < 2) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'g') {
      if (i > 0 && s[i - 1] !== 'g' && i < s.length - 1 && s[i + 1] !== 'g') {
        return false;
      }
    }
  }
  return true;
};
