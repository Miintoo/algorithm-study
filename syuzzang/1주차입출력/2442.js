const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let output = "";
for (let i = 1; i <= input; i++) {
  output += " ".repeat(input - i) + "*".repeat(i * 2 - 1) + "\n";
}

console.log(output);
