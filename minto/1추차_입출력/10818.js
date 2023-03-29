let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let inputArray = input[1].split(' ');

let min = Math.min(...inputArray);
let max = Math.max(...inputArray);

console.log(min, max);
