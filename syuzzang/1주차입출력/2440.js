const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = Number(input);
let result = "";

for (let i = N; i > 0; i--) {
  result += "*".repeat(i) + "\n";
}

console.log(result);
