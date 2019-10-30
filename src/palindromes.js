const palindromes = str => {
  const words = splitToLowerCaseWords(str);
  const candidates = palindromeCandidates(words);
  return candidates.filter(function(word) {
    return (
      word.length > 1 &&
      word ===
        word
          .split('')
          .reverse()
          .join('')
    );
  });
};

const splitToLowerCaseWords = str => {
  let result = str.match(/[a-z]+/gi);
  if (result === null) {
    return [];
  } else {
    return result.map(word => word.toLowerCase());
  }
};

const palindromeCandidates = arr => {
  const ret = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      ret.push(arr.slice(i, j + 1).join(''));
    }
  }
  return ret;
};

module.exports = {
  palindromes,
  splitToLowerCaseWords,
  palindromeCandidates,
};
