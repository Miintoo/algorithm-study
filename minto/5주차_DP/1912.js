const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input[0];

const inputAry = input[1].split(' ').map((item) => +item);

let currentValue = inputAry[0];
let resultList = [inputAry[0]];

for (let i = 1; i < inputAry.length; i++) {
  currentValue = Math.max(inputAry[i], currentValue + inputAry[i]);
  resultList.push(currentValue);
}

console.log(Math.max(...resultList));

/* 
배열에서 연속으로 되어있는 배열의 합의 최대값을 구하는 문제였다. 
주어진 입력이 10만이기 때문에 모든 경우의 수를 이중 배열로 구하기에는 시간 초과가 날꺼 같기 때문에 패스하고
두번째는 정렬해서 구하는 방법을 생각해 봤지만 연속된 배열이기 때문에 이 방법도 쉽지 않았다. 

마지막으로 생각한 방법이 DP즉 작은 단위로 나누어 점화식 형태로 푸는 방법이였다.

각 원소값과 지금까지 더한 값을 비교해 더 큰 값을 값으로 넣어주는 식으로 쪼개서 구한 배열에서 최대값을 구했다.


*/
