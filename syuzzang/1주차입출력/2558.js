const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = input[0] + input[1];

console.log(answer);

// map(Number)은 일일이 숫자로 바꿀필요없이 값들을 숫자로된 배열로 반환한다.
