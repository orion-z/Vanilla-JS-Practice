/*
Function to remove any values that evaluate to
the boolean state of false from any given array.

For some reason the filter method doesn't seem to work
with the value null, and sometimes NaN. I tried the 
two approaches beneath but couldn't get them to work.
  
  function bouncer(arr) {
    let result = arr.filter(word => word != false || null || 0 || "" || undefined || NaN);

    for (let i = result.length - 1; i >= 0 ; i--) {
      if (result.indexOf(null) != -1) {
        delete result.indexOf(null);
      }
    }
    return result;
  }
  
  function bouncer(arr) {  
  
  let result = arr.filter(word => word != false);
  result = result.filter(word => word != null);
  result = result.filter(word => word != 0);
  result = result.filter(word => word != "");
  result = result.filter(word => word != undefined);
  result = result.filter(word => word != NaN);
  return result;
  }
  
The very simple solution to just check whether a given
item within the array is true or not works without problems.
In retrospect it should have been my first approach. I am
learning that the most elegant solutions are often the
most simple ones and the ones with the least code.

Credit to this one goes to Nina Scholz on stackoverflow.
https://stackoverflow.com/questions/41346902/filter-null-from-an-array-in-javascript
*/

function bouncer(arr) {
    return arr.filter(Boolean);
}


bouncer([false, null, 0, NaN, undefined, ""]);
