let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

input.pop();
input = input.map((v) => v.split(" ").map(Number));

let answer = "";
let firstNum;
let restedNum;

input.forEach((x) => {
  [firstNum, ...restedNum] = x;
  // 로또의 개수와 숫자들을 구조분해할당으로 나눔
  generateLotto(0, []);
  // 함수 초기값설정
});

function generateLotto(L, pick) {
  if (pick.length === 6) {
    answer += `${pick.join(" ")}\n`;
    return;
  }
  // 로또개수 6개가 모였으면 답안에 더해준다
  for (let i = L; i < firstNum; i++) {
    generateLotto(i + 1, [...pick, restedNum[i]]);
  }
  //  for문을 돌려서 답안 배열에 값을 추가해준다
}

console.log(answer);

// 재귀사용한이유: 알고리즘강의에서 재귀함수를 배웠는데 활용할수있을것 같아서..
