const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

console.log(input.sort((a, b) => a - b).join('\n'));
