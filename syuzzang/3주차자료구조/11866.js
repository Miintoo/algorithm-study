let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let [N, K] = input.map(Number);
let arr = [...new Array(parseInt(N))].map((_, i) => i + 1);
const ans = [];

let cnt = 1;
while (arr.length) {
  let data = arr.shift();
  //   첫번째 루프를 돌때 data는 arr의 [0]번째를 가르킨다.

  if (cnt % K == 0) {
    ans.push(data);
    // k번째 일때 값을 data값을 넣어준다 arr[k];
  } else {
    arr.push(data);
    // 루프가 k번째가 안되었을경우 data는 배열의 마지막에 위치
  }
  cnt++;
}
console.log(`<${ans.join(", ")}>`);

//  이문제는 반복문을 돌면서 가장 앞에있는 숫자를 빼야되는 방식으로 선입선출방식인
//  queue를 선택하게 되었다.
