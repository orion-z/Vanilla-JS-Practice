/*
Function to remove given arguments from given array.
In this exercise I learnt about the arguments variable
and got more practice with arrow functions.
*/
function destroyer(arr) {
  /*loop through the length of arguments minus 1
    considering the first item is the array itself*/
  for (let i = 1; i <= arguments.length; i++) {
    /*filter any argument that is equal to the argument
      and reassign the new array to arr*/
    arr = arr.filter(x => x != arguments[i]);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
