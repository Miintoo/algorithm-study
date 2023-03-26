let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = +input[0].split(' ')[0];
const s = +input[0].split(' ')[1];

const inputArray = input[1]
  .split(' ')
  .map((item) => +item)
  .sort((a, b) => a - b);

let result = 0;

function getRecursion(k, sum) {
  if (k === n) {
    if (sum === s) {
      result += 1;
    }
    return;
  }
  getRecursion(k + 1, sum + inputArray[k]);
  getRecursion(k + 1, sum);
}

getRecursion(0, 0);

if (s === 0 && result >= 1) result -= 1;
console.log(result);

/*
  브루트포스 알고리즘을 생각했다.
  왜냐하면 N의 갯수가 20개밖에 되지 않아서 모든 경우의수를 검색해도 되겠다라는 생각을 먼저했고 

  정답이 되는 경우의 수의 중복을 검사할 방법이 딱히 없는거 같에서 재귀를 돌면서 맞는 경우만 +1을 하도록 구현했다.
*/
