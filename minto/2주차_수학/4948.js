let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

for (let i = 0; i < input.length - 1; i++) {
  const result = countDecimal(input[i] * 2);
  console.log(result);
}

function countDecimal(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  let result = 0;
  for (let i = Math.floor(n / 2) + 1; i < arr.length; i++) {
    if (arr[i]) {
      result += 1;
    }
  }
  return result;
}

/*
  소수를 판별하는 방법은 몇가지가 있는데 가장 기본적인 시작부터 끝까지 모두 소수인지 판단하면
  시간초과가 발생한다. 
  그래서 애라토스테네스의 체 방법을 이용해서 시간단축을 했다.
*/
