let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let sum = 0;

for (let i = 0; i < input + 1; i++) {
  sum += Number(i);
}

console.log(sum);
