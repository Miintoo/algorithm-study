const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const stack = [];
let answer = "";

for (let a of input) {
  console.log(a, stack);
  if (a === "문제") {
    console.log(a);
    stack.push(a);
  } else if (a === "고무오리" && stack.length > 0) {
    stack.pop();
  }else{
    
  }
}
stack.length === 0 ? (answer = "고무오리야 사랑해") : (answer = "힝구");

console.log(answer, stack);

// 후입선출 문제 스택
