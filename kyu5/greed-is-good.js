function score(dice) {
  let result = 0;
  //arr[0] won't be used for better readability
  let arr = [0, 0, 0, 0, 0, 0, 0];

  function calcRemainingOnesandFives() {
    result += arr[1] * 100;
    result += arr[5] * 50;
  }

  //Stores count of each number in array arr[1]=count of all the ones, arr[2] = count of all the twos etc.
  for (let i = 0; i < 5; i++) {
    arr[dice[i]]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3) {
      switch (i) {
        case 1:
          result += 1000;
          break;
        case 2:
          result += 200;
          break;
        case 3:
          result += 300;
          break;
        case 4:
          result += 400;
          break;
        case 5:
          result += 500;
          break;
        case 6:
          result += 600;
          break;
        default:
          break;
      }

      arr[i] -= 3;
      calcRemainingOnesandFives();
      return result;
    }
  }

  calcRemainingOnesandFives();
  return result;
}
