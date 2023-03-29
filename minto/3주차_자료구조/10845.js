let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0];

const queue = [];
const result = [];

for (let i = 1; i <= n; i++) {
  switch (input[i]) {
    case 'pop':
      result.push(queue.shift() || -1);
      break;
    case 'size':
      result.push(queue.length);
      break;
    case 'empty':
      result.push(queue.length ? 0 : 1);
      break;
    case 'front':
      result.push(queue[0] || -1);
      break;
    case 'back':
      result.push(queue[queue.length - 1] || -1);
      break;
    default:
      queue.push(input[i].split(' ')[1]);
      break;
  }
}

console.log(result.join('\n'));
