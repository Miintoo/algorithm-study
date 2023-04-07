const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input.shift();

input.sort((a, b) => a.length - b.length);
input.sort((a, b) => {
  if (a.length !== b.length) {
    return;
  }
  let aSum = 0;
  let bSum = 0;
  for (let i = 0; i < a.length; i++) {
    if (!isNaN(a[i])) {
      aSum += +a[i];
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (!isNaN(b[i])) {
      bSum += +b[i];
    }
  }
  if (aSum === bSum) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
    else return -1;
  }

  return aSum - bSum;
});

console.log(input.join('\n'));

/*
문제를 읽고 조건에 맞게 문자열을 정렬을 하면 되는구나 라는 생각이 들었다.
문제 조건도 n이 최대 50개이고 각 문자열 길이도 50개 이므로 시간 초과도 걱정하지 않아도 괜찮겠다는 생각에 
각 조건에 맞게 정렬을 했다. 
*/
