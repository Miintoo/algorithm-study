class minHeap {
  constructor() {
    this.heap = [];
    this.heap.push(-Infinity);
  }

  insert(value) {
    this.heap.push(value);
    this.upheap(this.heap.length - 1);
  }

  upheap(pos) {
    let tmp = this.heap[pos];
    while (tmp < this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
  }

  get() {
    if (this.heap.length === 2) return this.heap.pop();
    let res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return res;
  }

  downheap(pos, len) {
    let tmp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      if (tmp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }

  size() {
    return this.heap.length - 1;
  }
  front() {
    return this.heap[1];
  }
}

let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((item) => +item);

const heapArray = new minHeap();
const result = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] === 0) {
    if (heapArray.size() === 0) {
      result.push(0);
    } else {
      result.push(heapArray.get());
    }
    continue;
  }
  heapArray.insert(input[i]);
}

console.log(result.join('\n'));

/*
우선순위 큐 방식으로 문제를 풀었다. 
우선순위 큐 라이브러리가 없는 이상 직접 자료구조 구현하는거 엄청 빡시다...
*/
