/*
There is probably a way more elegant way to
code this. In the spirit of efficient time 
management I will not look further into
it right now though.
*/

function findLongestWord(str) {
  // turn string into array of words
  arr = str.split(' ');
  // turn str into an empty string
  str = '';
  // construct loop to run arr.length times
  for (var i = 0; i < arr.length; i++) {
    // replace str with current array item if it is longer
    if (arr[i].length > str.length) {
      str = arr[i];
    }
  }
  
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
