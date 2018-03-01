/*
A caesar cipher with a shift value of 13. 
Probably not the most elegant solution, 
it works really well though.
*/

function rot13(str) {
  str = str.toUpperCase();
  arr = str.split('');
  arr_one = [];
  arr_two = [];
  for (x = 0; x < str.length; x++) {
    arr_two.push(str.charCodeAt(x));
  }
  for (y = 0; y < arr_two.length; y++) {
    if (arr[y].charCodeAt(0) >= 65 && arr[y].charCodeAt(0) <= 77) {
      arr_one.push(String.fromCharCode((arr[y].charCodeAt(0) + 13)));
    } else if (arr[y].charCodeAt(0) >= 78 && arr[y].charCodeAt(0) <= 90) {
      arr_one.push(String.fromCharCode((arr[y].charCodeAt(0) - 13)));
    } else {
      arr_one.push(arr[y]);
    }
  }
  str = arr_one.join('');
  return str;
}

console.log(rot13("V ybir gur fbat \"Pbzr Onpx\" ol Alz."));


/*
These are some attempts I had a long the way.
They are obviously flawed and I include them
only for educational purposes and to show how
the core idea I had from the start formed
over time.

  arr = str.split('');
  new_arr = [];
  for (let j = 0; j < arr.length; j++) {
    console.log(str.charCodeAt(j));
    if (str.charCodeAt(j) >= 65 && str.charCodeAt(j) <= 90) {
      if (str.charCodeAt(j) >= 65 && str.charCodeAt(j) <= 77) {
        new_arr.push(String.fromCharCode(str.charCodeAt(j) + 13));
      } else if (str.charCodeAt(j) >= 65 && str.charCodeAt(j) <= 77) {
        new_arr.push(String.fromCharCode(str.charCodeAt(j) - 13));
     }
  }
  new_arr.push((String.fromCharCode(str.charCodeAt(j))));
  }
  for (i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
        str[i] = String.fromCharCode(str.charCodeAt(i) + 13);
      } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
        str.charCodeAt(i) = String.fromCharCode(str.charCodeAt(i) - 13);
      }
    }
  }
  
  str = new_arr.join('');
  */
