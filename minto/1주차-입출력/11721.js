let input = require('fs').readFileSync('/dev/stdin').toString();

let n = input.length / 10;

let result = [];

for (let i = 0; i < n; i++) {
  let start = i * 10;
  result.push(input.substr(start, 10));
}

console.log(result.join('\n'));
