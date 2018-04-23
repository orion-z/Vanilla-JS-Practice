// Function which reverses given integer

// Elegant final solution
function reverseInt(n) {
  const rev = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(rev) * Math.sign(n);
}

// First experimental solution
function reverseIntFirst(n) {
  temp = [];
  n.toString().split('').map(m => {
    if (m === "-") {
      return;
    } else {
      temp.unshift(m);
    }
  })
  if (n < 0) {
    temp.unshift('-');
  }
  return Number(temp.join(''));
}
