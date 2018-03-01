/*
A simple function to turn a one-dimentional
array into a two-dimensional one. First
parameter is the input array, second one is
the size of each nested array.

Inspired by an exercise of freecodecamp.org
*/

function transformArray(arr, size) {
  // create i to specify loop length
  var i = arr.length / size;
  // create returning array to push into
  var arr_two = [];
  // loop over input array with push and splice
  for (i; i > 0; i--) {
    arr_two.push(arr.splice(0, size));    
  }
  return arr_two;
}

// outputs [["a", "b"], ["c", "d"]]
transformArray(["a", "b", "c", "d"], 2);
// outputs [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
transformArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// outputs [[0, 1, 2], [3, 4, 5], [6]]
transformArray([0, 1, 2, 3, 4, 5, 6], 3);
