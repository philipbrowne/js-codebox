const either404 = (numbers) => {
  let foundA = false;
  let foundB = false;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      if (
        (i > 0 && numbers[i - 1] === 0) ||
        (i < numbers.length - 1 && numbers[i + 1] === 0)
      ) {
        foundA = true;
      }
    }
    if (numbers[i] === 4) {
      if (
        (i > 0 && numbers[i - 1] === 4) ||
        (i < numbers.length - 1 && numbers[i + 1] === 4)
      ) {
        foundB = true;
      }
    }
  }
  if (foundA && foundB) return false;
  if (foundA && !foundB) return true;
  if (!foundA && foundB) return true;
  return false;
};
