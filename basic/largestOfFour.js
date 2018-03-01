/*
Find the largest number in each sub-array
and return a new one-dimensional array
containing each.
*/
function largestOfFour(arr) {
  // create a second array to push into
  let temp_arr = [];
  // outer layer, loop over the first dimension array
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    // each number will be checked against 0
    let highest = 0;
    // inner layer, loop over the second dimension arrays
    for (let j = 0; j < arr[i].length; j++) {
      //console.log(arr[i][j]);
      if (arr[i][j] > highest) {
        highest = arr[i][j];
      }
    }
    // fill second array with only the highest numbers of each sub-array
    temp_arr.push(highest);
  }
  return temp_arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
