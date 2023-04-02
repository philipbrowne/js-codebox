const fizzBuzz = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    let value = '';
    if (i % 3 === 0) {
      value += 'Fizz';
    }
    if (i % 5 === 0) {
      value += 'Buzz';
    }
    if (!value) {
      value = i.toString();
    }
    result.push(value);
  }
  return result;
};
