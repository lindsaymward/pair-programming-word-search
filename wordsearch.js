const transpose = require('./matrix_transposition');

const wordSearch = (letters, word) => {
// Check if word is an empty string or letters is empty array
  if (!word || !letters.length) {
    return undefined;
  }

// Use matrix_transposition function transpose to flip letters array diagonally so we can look for vertical matches
  const flipped = transpose(letters);

  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = flipped.map(ls => ls.join(''));

  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;

// Does word exist vertically?

// What if the letters matrix is empty?

// What if word isn't a word? Not a string?

// Stretch: backwards and diagonally
