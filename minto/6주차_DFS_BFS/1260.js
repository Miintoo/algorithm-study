const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const inputAry = input.shift().split(' ');

const n = +inputAry[0];
const m = +inputAry[1];
const v = +inputAry[2];

input.sort((a, b) => a.split(' ')[1] - b.split(' ')[1]);

const DFSArray = [];

const accessAry = new Array(n + 1).fill(0);

// DFS 입니다.

function DFS(startNum) {
  if (accessAry[startNum]) return;
  accessAry[startNum] = 1;
  DFSArray.push(startNum);

  for (let i = 0; i < input.length; i++) {
    const [x, y] = input[i].split(' ');

    if (y === startNum) {
      accessAry[x];
      DFS(x);
    } else if (x === startNum) {
      accessAry[y];
      DFS(y);
    }
  }
}
DFS(v);

console.log(DFSArray.join(' '));

// BFS

const BFSArray = [];

function BFS(startNum) {
  const queue = [];
  queue.push(startNum);

  while (queue.length > 0) {
    const selectNum = queue.shift();
    if (BFSArray.includes(selectNum)) {
      continue;
    }
    BFSArray.push(selectNum);

    for (let i = 0; i < input.length; i++) {
      const [x, y] = input[i].split(' ');

      if (x === selectNum) {
        queue.push(y);
      } else if (y === selectNum) {
        queue.push(x);
      }
    }
  }
}

BFS(v);

console.log(BFSArray.join(' '));
