let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const n = +input[0];
const k = +input[1];

const result = [];
const inputArray = [];

for (let i = 1; i <= n; i++) {
  inputArray.push(i);
}

let cnt = 0;
while (inputArray.length !== 0) {
  if (cnt === k - 1) {
    result.push(inputArray.shift());
    cnt = 0;
  } else {
    inputArray.push(inputArray.shift());
    cnt += 1;
  }
}

const resultStr = result.join(', ');
console.log(`<${resultStr}>`);

/*
반복문으로도 구현할 수 있을꺼 같은데 로직이 엄청 복잡할꺼 같다는 생각이 들었다.
자료구조중에 stack과 queue가 있는데 queue를 이용하면 쉽게 구할 수 있다는 생각이 들었고 입력 조건이 최대가 1000이므로 최악의 경우
연산의 시간이 1억개가 안 넘겠다는 생각에 shift 메서드를 통해 queue로 문제를 풀었다.
*/
