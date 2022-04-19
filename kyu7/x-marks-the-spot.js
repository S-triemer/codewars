/*
#'x' marks the spot

##Task:

Given a two dimensional array, return the co-ordinates of 'x'.

If 'x' is not inside the array, or if 'x' appears multiple times, return []

The co-ordinates should be zero indexed.

You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

Example test cases:

'Return an empty array if input is an empty array' => []

[] 

'Return an empty array if no x found' => []

[
  ['o', 'o'],
  ['o', 'o']
]

'Return an empty array if more than one x found' => []

[
  ['x', 'o'],
  ['o', 'x']
]

'Return [0,0] when x at top left' => [0, 0]

[
  ['x', 'o'],
  ['o', 'o']
]

'Return [4,6] for the example below' => [4, 6]

[
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]

*/

const xMarksTheSpot = (input) => {
  let arrResult = [];
  let xFrequency = 0;
  input.map((currentValue, index, array) => {
    currentValue.map((value) => {
      if (value == "x") {
        xFrequency++;
        arrResult.push(index);
        arrResult.push(currentValue.indexOf("x"));
      }
    });
  });
  return arrResult.length > 2 || xFrequency > 1 ? [] : arrResult;
};

console.log(
  xMarksTheSpot([
    ["x", "o", "o", "x", "o", "o", "o", "o"],
    ["o", "o", "o", "0", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "0", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
  ])
);

/*
Best practice
const xMarksTheSpot = (input) => {
  let coords = []

  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("x")) {
      coords.push([i, input[i].indexOf("x")])
    }
  }
  if (coords.length === 1) {
    return coords[0]
  } else {
    return []
  }
}
*/
