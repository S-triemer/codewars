//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
//Example:
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//Find the capital letters of a string
const capitals = function (word) {
  let indexOfCapitalLetters = [];
  [...word].forEach((letter, i) => {
    if (letter > "@" && letter < "[") {
      indexOfCapitalLetters.push(i);
    }
  });
  return indexOfCapitalLetters;
};
