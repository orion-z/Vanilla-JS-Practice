// take input number, multiple the number's digits until it's single-digit
// return number of iterations (recursive function)

function persistence(num, ctr=0) {
  if (num < 0 || isNaN(num)) {
    return false;
  } else if (num < 10) {
    return ctr;
  } else {
    const arr = num.toString().split('');
    x = arr.reduce((a, b) => Number(a) * Number(b));
    ctr++;
    return persistence(x, ctr);
  }
}
