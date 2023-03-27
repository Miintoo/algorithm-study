let input = require('fs')
  .readFileSync('../input.txt')
  .toString()
  .split('\n')
  .map((item) => +item);

const n = input[0];

const inputList = [];
const absList = [];
const result = [];

for (let i = 1; i <= input.length; i++) {
  if (input[i] !== 0) {
    inputList.push(input[i]);
    absList.push(Math.abs(input[i]));
    continue;
  }
  getMinNumber();
}

function getMinNumber() {
  absList.sort((a, b) => b - a);

  const selectNum = absList.pop();
  console.log(absList.pop());
}
