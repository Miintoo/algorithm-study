let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input.shift();

input.sort((a, b) => a - b);

console.log(input.join('\n'));
