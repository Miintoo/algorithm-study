const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
while (input.length) {
  console.log(input.slice(0, 10));
  input = input.slice(10);
}
