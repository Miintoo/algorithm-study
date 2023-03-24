let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

const n = input.shift();
input.sort((a, b) => a - b);

const answer = [];

const a = input[0];
const b = input[1];

let gcd = b - a;

function getGCD(num1, num2) {
  return num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2);
}

for (let i = 2; i < n; i++) {
  gcd = getGCD(gcd, input[i] - input[i - 1]);
}

for (let i = 2; i <= gcd; i++) {
  if (gcd % i === 0) answer.push(i);
}

console.log(answer.join(' '));

/* 

굉장히 고생한 문제이다.

일단 브루트포스로 모든걸 2부터 검색하기에는 10억까지의 경우의수가 있으므로 불가능하다.

그래서 방법은 주어진 수들을 오름차순으로 정렬한다.
그리고 정렬한 값들의 현재값과 나중값의 차이를 기준으로 앞뒤에 최대공약수를 구한다. 
구해진 최대공약수의 약수들이 즉 정답이 나온다.

이 방법에서 최대공약수는 유클리드 호제법으로 O(logn)의 시간복잡도가 걸리므로 속도가 빠르다. 

*/
