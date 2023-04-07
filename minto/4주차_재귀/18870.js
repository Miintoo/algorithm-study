const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const inputArray = input[1].split(' ');
const setArray = new Set(inputArray);

const uniqueSortedArray = [...setArray].sort((a, b) => a - b);

const dict = {};
uniqueSortedArray.forEach((item, index) => (dict[item] = index));

let result = '';

for (let i = 0; i < inputArray.length; i++) {
  result += dict[inputArray[i]] + ' ';
}

console.log(result);

/*
문제에서 간격은 결국 해당 값보다 작은 값들의 갯수를 return 해주는 문제이다.

set 객체를 활용해서 중복값을 제거한 정렬된 값으로 배열을 만들어줬다. 

여기서 중요한게 이중 반복문으로 돌리면 시간초과가 발생하기 때문에 객체를 만들어서 key값으로 배열을 돌면서 결과를 도출하도록 만들면 가능하다. 
*/
