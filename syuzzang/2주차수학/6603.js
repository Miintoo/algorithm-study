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
  // 길이가 6개만 걸러낸다
  for (let i = L; i < firstNum; i++) {
    generateLotto(i + 1, [...pick, restedNum[i]]);
  }
  //  for문을 돌려서 답안 배열에 값을 추가해준다 L이 0이될때까지 반복됨
  // 예를들어 L이 5라고 했을때 5~firstnum까지 반복하고 배열 뒤에 들어감
}

console.log(answer);
