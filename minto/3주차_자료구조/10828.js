let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const result = [];
const stack = [];

const n = +input[0];

for (let i = 1; i <= n; i++) {
  switch (input[i]) {
    case 'pop':
      result.push(stack.pop() || -1);
      break;
    case 'size':
      result.push(stack.length);
      break;
    case 'empty':
      result.push(stack[0] ? 0 : 1);
      break;
    case 'top':
      result.push(stack[stack.length - 1] || -1);
      break;
    default:
      stack.push(input[i].split(' ')[1]);
      break;
  }
}

console.log(result.join('\n'));

/*
  간단한 문제이다. 배열을 활용해서 case 별로 분류해줬다.
*/
