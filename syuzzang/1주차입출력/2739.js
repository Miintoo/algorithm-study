let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let answer = "";

for (let i = 1; i < 10; i++) {
  answer += `${Number(input)} * ${Number(i)} = ${Number(input) * Number(i)}\n`;
}

console.log(answer);
