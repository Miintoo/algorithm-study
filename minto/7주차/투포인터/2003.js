const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0].split(' ')[0];
const m = +input[0].split(' ')[1];
const input_array = input[1].split(' ').map((item) => +item);

let sum = 0;
let count = 0;
let left = 0;
let right = 0;

while (right <= n) {
  if (m === sum) {
    count += 1;
    sum -= input_array[left];
    left++;
  } else if (m > sum) {
    sum += input_array[right];
    right++;
  } else if (m < sum) {
    sum -= input_array[left];
    left++;
  }
}

console.log(count);
