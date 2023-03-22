let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((item) => +item);

function countDecimal(a, b) {
  let arr = Array(b + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= b; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= b; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.forEach((value, index) => {
    if (index >= a && value) {
      console.log(index);
    }
  });
}
countDecimal(input[0], input[1]);

/*
입력 값이 많으니 전체부터 소수를 찾으면 시간초과가 발생할 수 있으니
애라토스테네스의 체 방법을 이용해서 소수를 구했다. 
*/
