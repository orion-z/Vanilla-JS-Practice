/*
A function that shortens input string (str) 
beneath a certain input length (num) and
adds 3 periods to the end. Final length num
should already include "...".
*/
function truncateString(str, num) {
  // declare reused variables
  const trunc = "...";
  const len = str.length;
  
  // only add "..." if str length is <= 3
  if (len <= 3) {
    str += trunc;
  }
  // shorten string by difference + 3, then add "..."
  if (len > num) {
    str = str.slice(0, -((len+3)-num));
    str += trunc;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
