/*
A simple function to reverse any
given string input.
*/

function reverseString(str) {
  // turn string into array
  var arr = str.split('');
  // reverse it
  arr = arr.reverse();
  // turn array back into string
  str = arr.join('');
  return str;
}

/*
On further research, I discovered this can be 
a one-liner, as shown here:

function reverseString(str) {
  return str.split('').reverse().join('');
}

Credit to "belacqua" on stackoverflow
*/

reverseString("hello");
