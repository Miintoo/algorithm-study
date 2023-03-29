const array = require("fs").readFileSync("./input.txt").toString().split("\n");
array.shift();

const stack = [];

const fun = {
  pop: () => stack.pop() || -1,
  size: () => stack.length,
  empty: () => (stack[0] ? 0 : 1),
  top: () => stack[stack.length - 1] || -1,
  push: (item) => {
    stack.push(item.split(" ")[1]);
    return "";
  },
};

const result = array.reduce(
  (acc, v) => acc + (fun[v] ? `${fun[v]()}\n` : fun.push(v)),
  ""
);

console.log(result);

// 원래 일일이 각 메서드들을 직접 만들어서 구현했으나 본 풀이법이 더 효율적일것같아 공부해봤다.
