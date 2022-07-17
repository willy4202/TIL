const foo = (str) => {
  let count = 0;
  const vowel = ["a", "e", "i", "o", "u"];

  for (let checkStr of str.toLowerCase()) {
    if (vowel.includes(checkStr)) {
      count++;
    }
  }
  return count;
};

foo("abracadabra");
