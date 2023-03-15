const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

console.log(Number(input[0]) + Number(input[1]));

// stdin 이란? standard input의 약자로 표준입력에 대한 포인터
