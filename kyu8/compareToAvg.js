function betterThanAverage(classPoints, yourPoints) {
  let avg =
    classPoints.reduce((prev, curr) => prev + curr) / classPoints.length;
  console.log(avg);
  return yourPoints > avg ? true : false;
}
