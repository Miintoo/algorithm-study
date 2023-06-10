const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function fibo(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibo(num - 1) + fibo(num - 2);
  }
}

console.log(fibo(Number(input)));
