/*
Function that takes in an array of numbers and
a single number. The output should be the index
at which the given number should be put if
the array was sorted.
*/

function getIndexToIns(arr, num) {
  // function to sort numerically rather than alphabetically
  function sortNumber(a,b) {
    return a - b;
  }
  
  // sorted array which will be used in the following loop
  const sorted = arr.sort(sortNumber);
  //console.log(sorted);
  
  for (let i = 1; i <= sorted.length; i++) {
    if (num == sorted[i]) {
      return i;
    }
    if (num <= sorted[0]) {
        return 0;
       }
    if (num > sorted[i-1] && num < sorted[i]) {
      return i;
    }
    // if number is bigger than last item, put it at the end
    if (num > sorted[sorted.length - 1]) {
      return sorted.length;
    }
  }
  return num;
}

getIndexToIns([2, 5, 10], 15);
