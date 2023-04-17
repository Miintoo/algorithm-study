const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input.shift();

const pyramid = input.map((item) => item.split(' '));

for (let i = 1; i < pyramid.length; i++) {
  if (i === 1) {
    pyramid[1][0] = +pyramid[1][0] + +pyramid[0];
    pyramid[1][1] = +pyramid[1][1] + +pyramid[0];
  } else {
    pyramid[i][0] = +pyramid[i][0] + pyramid[i - 1][0];
    pyramid[i][i] = +pyramid[i][i] + pyramid[i - 1][i - 1];

    for (let j = 1; j < pyramid[i].length - 1; j++) {
      pyramid[i][j] = +pyramid[i][j] + Math.max(pyramid[i - 1][j - 1], pyramid[i - 1][j]);
    }
  }
}

console.log(Math.max(...pyramid[n - 1]));

/**
 * 아래 값들을 이용해서 최대값을 구면서 새로운 배열을 만드는 방식으로 푼 DP 문제이다.
 */
