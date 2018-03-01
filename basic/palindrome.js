/*
There is probably a way more elegant way to
code this. In the spirit of efficient time 
management I will not look further into it though.
*/

function palindrome(str) {
  // regex check if char is NOT alphanumeric
  var re = /\W/g;
  // regex check if char IS an underscore
  var re1 = /_/g;
  // filter out non-alphanumeric chars
  str = str.replace(re, '');
  // filter out underscore chars
  str = str.replace(re1, '');
  // convert string to lowercase
  str = str.toLowerCase();
  // return true if str is the same as its reverse
  return str == str.split('').reverse().join('');
}



palindrome("eye");
