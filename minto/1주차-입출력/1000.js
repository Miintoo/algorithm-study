let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((item) => +item);
console.log(input[0] + input[1]);
