// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const [n, ...rest] = input;

// function solution(n, commands) {
//   const stack = [];
//   let top = 0;
//   //   명령어에 따른 인덱스길이의 변화를 변수에 담아둔다
//   let answer = "";

//   for (let i = 0; i < n; i += 1) {
//     const command = commands[i].split(" ")[0];
//     let result = "";

//     switch (command) {
//       case "push":
//         let pushItem = commands[i].split(" ")[1];
//         stack[top++] = pushItem;
//         break;
//       case "pop":
//         if (top) {
//           top -= 1;
//           result = stack.splice(-1);
//           answer += result + " ";
//         } else {
//           result = -1;
//           answer += result + " ";
//         }
//         break;
//       case "top":
//         result = top ? stack[top - 1] : -1;
//         answer += result + " ";
//         break;
//       case "empty":
//         result = top < 1 ? 1 : 0;
//         answer += result + " ";
//         break;
//       case "size":
//         result = top;
//         answer += result + " ";
//         break;

//       default:
//         break;
//     }
//   }
//   return answer.split(" ").join("\n").trim();
// }

// console.log(solution(n, rest));

const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");
array.shift();

const stack = [];

const fun = {
  pop: () => stack.pop() || -1,
  size: () => stack.length,
  empty: () => (stack[0] ? 0 : 1),
  top: () => stack[stack.length - 1] || -1,
  push: (item) => {
    stack.push(item.split(" ")[1]);
    return "";
  },
};

const result = array.reduce(
  (acc, v) => acc + (fun[v] ? `${fun[v]()}\n` : fun.push(v)),
  ""
);

console.log(result);

// 기존 로직에 비해 80ms 더빠르고 메모리 사용도 1000kb 차이가 난다.
// push 1
// push 2
// top
// size
// empty
// pop
