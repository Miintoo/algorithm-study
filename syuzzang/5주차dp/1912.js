let fs = require("fs");
let numbers = fs.readFileSync("./input.txt").toString().split("\n");
const N = Number(numbers[0]);
numbers = numbers[1]
  .trim()
  .split(" ")
  .map((element) => Number(element));
numbers.unshift(0);
const dp = new Array(N + 1);
dp[0] = numbers[1];
dp[1] = numbers[1];

for (let i = 2; i <= N; i++) {
  // 직전까지의 부분 합 + 현재 값  : dp[i-1] + numbers[i]
  // 현재 값 : numbers[i]
  if (dp[i - 1] + numbers[i] >= numbers[i]) {
    // 직전까지의 부분 합 + 현재 값이 가장 클 때
    dp[i] = dp[i - 1] + numbers[i];
  } else {
    // 현재 값이 가장 클 때
    dp[i] = numbers[i];
  }
}
console.log(Math.max(...dp));
