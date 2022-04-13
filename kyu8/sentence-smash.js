function smash(words) {
  if (words.length) {
    return words
      .reduce((acc, curr) => {
        return acc + " " + curr;
      })
      .trim();
  } else {
    return "";
  }
}

console.log(smash([]));

/*
Best practice

smash = function (words) {
  return words.join(" ");
};

*/
