const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = 0;
let result = [];

for (let i = 1; i < input.length; i++) {
  const selectedValue = +input[i];

  function DP(num) {
    if (num === selectedValue) {
      cnt += 1;
      return;
    }
    for (let h = 1; h <= 3; h++) {
      let plusNum = num + h;
      if (plusNum <= selectedValue) {
        DP(plusNum);
      }
    }
  }

  for (let j = 1; j <= 3; j++) {
    DP(j);
  }

  result.push(cnt);
  cnt = 0;
}

console.log(result.join('\n'));

/* 
전형적인 DP 문제이다. 
각 1, 2, 3 값들의 선택에 순서를 기억하고 있기 때문에 재귀를 생각했다. 
*/
