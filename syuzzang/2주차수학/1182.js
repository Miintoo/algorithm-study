const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
// 5,0
const A = input[1].split(" ").map(Number);

function dp(i, S) {
  if (i == 0) return S == A[0] ? 1 : 0;
  //S값과 요소값이 같을떄
  const n = A[i] == S ? 1 : 0;
  return dp(i - 1, S) + dp(i - 1, S - A[i]) + n;
  // A[i] 포함 여부에 따라 분할 [...] + [..., A[i]] + [A[i]]
}

console.log(dp(N - 1, S));

//  다이나믹 프로그래밍 이용
