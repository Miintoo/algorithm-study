const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number);

// function reverse(arr) {
//   let answer = "";
//   if (arr.length === 0) {
//     return answer;
//   }
//   answer += `${arr[Number(arr.length - 1)]}`;
//   // arr length-1값을 넣고 arr pop

//   arr.pop();
//   return answer + reverse(arr);
// }

// console.log(reverse(input));

let sortedArr = input.sort((a, b) => b - a);
let answer = sortedArr.reduce((acc, cur) => `${acc}${cur}`, "");
console.log(answer);
