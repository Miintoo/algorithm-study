const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
input.shift();

const queue = [];

const func = {
  pop: () => queue.shift() || -1,
  size: () => queue.length,
  empty: () => (queue.length === 0 ? 1 : 0),
  front: () => (queue.length > 0 ? queue[0] : -1),
  back: () => (queue.length > 0 ? queue[queue.length - 1] : -1),
  push: (item) => {
    queue.push(item.split(" ")[1]);
    return "";
  },
};
const result = input.reduce(
  (acc, v) => acc + (func[v] ? `${func[v]()}\n` : func.push(v)),
  ""
);

console.log(result.trim());
