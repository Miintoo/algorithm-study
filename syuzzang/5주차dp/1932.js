let fs = require("fs");
let numbers = fs.readFileSync("./input.txt").toString().split("\n");

let T = numbers[0];

console.log(numbers);
