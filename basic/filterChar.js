// Take input of string(s), filter out each character, return sorted strong

function filterChar(s1, s2) {
  a = [];
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].split('').map(c => {
      if (a.indexOf(c) == -1) { a.push(c); }
    })
  }
  return a.sort().join('');
}
