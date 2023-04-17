const input = +require('fs').readFileSync('/dev/stdin').toString();

const resultAry = [0, 1, 3, 5];

if (input === 1) {
  console.log(1 % 10007);
} else if (input === 2) {
  console.log(3 % 10007);
} else if (input === 3) {
  console.log(5 % 10007);
} else {
  for (let i = 4; i <= input; i++) {
    resultAry.push((resultAry[i - 1] + 2 * resultAry[i - 2]) % 10007);
  }
  console.log(resultAry.pop());
}

/**
 * 문제를 잘게 쪼개서 최종 결과에 잘개 쪼갠 부분을 이용해서 최종값을 구하는 DP 문제이다.
 */
