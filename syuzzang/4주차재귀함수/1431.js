const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

input.shift();

input.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  let sum1 = sum(a),
    sum2 = sum(b);
  if (sum1 == sum2) return a.localeCompare(b);
  //    숫자만 더한값이 같다면 이젠 문자만 비교를 하고 값이 앞쪽순서인지 뒷쪽 순서인지 판단한다.
  //   여기서 나온 숫자로 거꾸로 정렬할건지 그대로 정렬할건지 판단
  //   localecompare은 문자열이 정렬 순서에서 앞 또는 뒤에 오는지 또는 주어진 문자열과 같은지를 숫자로 반환
  return sum1 - sum2;
});

console.log(input.join("\n"));

function sum(str) {
  return str.match(/[\d]/g)?.reduce((a, c) => a + +c, 0) || 0;

  // 숫자만 솔팅해서 값을 더해준다
}
