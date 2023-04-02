const longestWord = (words) => {
  let longestWord = '';
  let secondLongestWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      secondLongestWord = longestWord;
      longestWord = words[i];
    } else if (words[i].length === longestWord.length) {
      secondLongestWord = longestWord;
    } else if (words[i].length > secondLongestWord.length) {
      secondLongestWord = words[i];
    }
  }
  return longestWord === secondLongestWord ? 'Foobar' : longestWord;
};
