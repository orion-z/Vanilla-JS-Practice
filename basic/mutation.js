/*
Check whether all characters of the second array element
are present in the first array element.
*/

function mutation(arr) {
  // first string in array form
  let str_one = arr[0].toLowerCase().split('');
  // second string in array form
  let str_two = arr[1].toLowerCase().split('');
  
  for (let i = str_two.length - 1; i >= 0; i--) {
    /*
    I used this to check the outputs in my console as a means of debugging.
    I realise this can be done more efficiently, however it gave me
    a quick overview of what is going wrong, leading me to the solution.
    
    console.log("str_two = " + str_two + " | i = " + i + " str_two[i] = " + str_two[i] +
               " str_two[i].indexOf(str_one) = "+str_two[i].indexOf(str_one));
    */    
    if (str_one.indexOf(str_two[i]) == -1) {
      return false;
    }
  }
  
  return true;
}

mutation(["hello", "hey"]);
