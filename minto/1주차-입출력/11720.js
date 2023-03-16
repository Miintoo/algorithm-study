let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let sum = 0;

for (let i = 0; i < +input[0]; i++) {
  sum += Number(input[1][i]);
}

console.log(sum);
