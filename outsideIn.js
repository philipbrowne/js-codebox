const outsideIn = (outside, inside) => {
  const outsideSet = new Set(outside);
  for (const el of inside) {
    if (!outsideSet.has(el)) {
      return false;
    }
  }
  return true;
};
