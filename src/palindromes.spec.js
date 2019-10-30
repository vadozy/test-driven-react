const {
  palindromes,
  splitToLowerCaseWords,
  palindromeCandidates,
} = require('./palindromes');

describe('palindromes()', () => {
  it('correctly identifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']);
    expect(palindromes('racecar')).toEqual(['racecar']);
  });

  it('returns an empty array when given no palindromes', () => {
    expect(palindromes('tic tac toe')).toEqual([]);
  });

  it('ignores casing', () => {
    expect(palindromes('WoW')).toEqual(['wow']);
  });

  it('ignores punctuation', () => {
    expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
  });

  it('detects multi-word palindromes', () => {
    expect(palindromes('A man, a plan, a canal, Panama')).toEqual([
      'amanaplanacanalpanama',
    ]);
  });

  it('finds insider palindromes', () => {
    expect(
      palindromes('What number is never odd or even, asked the Sphinx?')
    ).toEqual(['neveroddoreven']);
  });
});

describe('splitToLowerCaseWords()', () => {
  it('correctly splits an empty string', () => {
    expect(splitToLowerCaseWords('')).toEqual([]);
  });

  it('correctly splits an an example string', () => {
    const result = splitToLowerCaseWords(
      'What number is never odd or even, asked the Sphinx?'
    );
    expect(result).toEqual([
      'what',
      'number',
      'is',
      'never',
      'odd',
      'or',
      'even',
      'asked',
      'the',
      'sphinx',
    ]);
  });
});

describe('palindromeCandidates()', () => {
  it('generates the palindrome candidates', () => {
    expect(palindromeCandidates(['1', '2', '3'])).toEqual([
      '1',
      '12',
      '123',
      '2',
      '23',
      '3',
    ]);
  });
});
