// take input string, return with all vowels removed

function disemvowel(str) {
  let arr = str.split('');
  str = '';
  arr.map(a => {if (!/[aeiouAEIOU]/.test(a)) str += a});
  return str;
}
